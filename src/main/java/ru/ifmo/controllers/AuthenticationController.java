package ru.ifmo.controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.ifmo.security.UserInfoDetails;
import ru.ifmo.services.TokenService;
import ru.ifmo.services.UserInfoDetailsService;
import ru.ifmo.transfer.LoginRequest;
import ru.ifmo.transfer.LoginResponse;
import ru.ifmo.transfer.RefreshTokenResponse;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final TokenService tokenService;
    private final AuthenticationManager authenticationManager;
    private final UserInfoDetailsService userInfoDetailsService;


    @Autowired
    public AuthenticationController(TokenService tokenService, AuthenticationManager authenticationManager,
                          UserInfoDetailsService userInfoDetailsService) {
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
        this.userInfoDetailsService = userInfoDetailsService;
    }



    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        System.out.println(request);
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(request.username(), request.password());

        Authentication auth = authenticationManager.authenticate(authenticationToken);

        UserInfoDetails user = (UserInfoDetails) userInfoDetailsService.loadUserByUsername(request.username());
        System.out.println(user.getUsername() + " " + user.getPassword());
        String access = tokenService.generateAccessToken(user);
        String refresh = tokenService.generateRefreshToken(user);

        return new LoginResponse("User signed in successfully", access, refresh);
    }

    @GetMapping("token/refresh")
    public RefreshTokenResponse refreshToken(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        String[] tokens = header.split(" ");
        String refresh = tokens[1];

        String email = tokenService.parseToken(refresh);
        UserInfoDetails user = (UserInfoDetails) userInfoDetailsService.loadUserByUsername(email);

        String access = tokenService.generateAccessToken(user);
        String newRefresh = tokenService.generateRefreshToken(user);

        return new RefreshTokenResponse(access, newRefresh);
    }
}
