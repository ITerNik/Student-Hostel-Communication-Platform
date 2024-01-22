package ru.ifmo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import ru.ifmo.services.CredentialsService;

import java.util.ArrayList;

@Component
public class DataAccessAuthenticationProvider implements AuthenticationProvider {

    private final CredentialsService service;

    @Autowired
    public DataAccessAuthenticationProvider(CredentialsService service) {
        this.service = service;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String userName = authentication.getName();
        UserDetails credentialsDetails = service.loadUserByUsername(userName);

        String password = authentication.getCredentials().toString();
        if (!password.equals(credentialsDetails.getPassword())){
            throw new BadCredentialsException("Неверный логин или пароль");
        }

        return new UsernamePasswordAuthenticationToken(credentialsDetails, password, new ArrayList<>());
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return true;
    }
}
