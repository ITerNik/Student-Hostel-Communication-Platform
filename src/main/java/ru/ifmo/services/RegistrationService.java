package ru.ifmo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.ifmo.exceptions.RegisterException;
import ru.ifmo.models.UserInfo;
import ru.ifmo.repositories.UserInfoRepository;
import ru.ifmo.transfer.RegisterRequest;

import java.util.HashSet;

@Service
public class RegistrationService {

    private final UserInfoRepository userInfoRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${domain}")
    private String DOMAIN;

    @Autowired
    public RegistrationService(UserInfoRepository userInfoRepository, PasswordEncoder passwordEncoder) {
        this.userInfoRepository = userInfoRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserInfo registerUser(RegisterRequest request) throws RegisterException {
        String email = request.username();
        if (userInfoRepository.findUserInfoByEmail(email).isPresent()) {
            throw new RegisterException("Email " + email + " is already in use");
        }
        if (!email.endsWith("@" + DOMAIN)) {
            throw new RegisterException("Invalid email domain");
        }
        if (!request.password().equals(request.repeated())) {
            throw new RegisterException("Passwords aren't the same");
        }

        UserInfo user = new UserInfo();
        user.setEmail(email);
        user.setUsername("Your Name");
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setRoles(new HashSet<>());

        return userInfoRepository.save(user);
    }
}
