package ru.ifmo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.ifmo.models.UserInfo;
import ru.ifmo.repositories.UserInfoRepository;
import ru.ifmo.security.UserInfoDetails;

@Service
public class UserInfoDetailsService implements UserDetailsService {

    private final UserInfoRepository userInfoRepository;

    @Autowired
    public UserInfoDetailsService(UserInfoRepository userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        System.out.println(email);
        UserInfo user = userInfoRepository.findUserInfoByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new UserInfoDetails(user);
    }
}
