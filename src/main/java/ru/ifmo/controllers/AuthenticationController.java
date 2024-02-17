package ru.ifmo.controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import ru.ifmo.exceptions.RegisterException;
import ru.ifmo.models.UserInfo;
import ru.ifmo.security.UserInfoDetails;
import ru.ifmo.services.RegistrationService;
import ru.ifmo.services.TokenService;
import ru.ifmo.services.UserInfoDetailsService;
import ru.ifmo.transfer.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final TokenService tokenService;
    private final AuthenticationManager authenticationManager;
    private final UserInfoDetailsService userInfoDetailsService;
    private final RegistrationService registrationService;


    @Autowired
    public AuthenticationController(TokenService tokenService, AuthenticationManager authenticationManager,
                                    UserInfoDetailsService userInfoDetailsService, RegistrationService registrationService) {
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
        this.userInfoDetailsService = userInfoDetailsService;
        this.registrationService = registrationService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(request.username(), request.password());

        Authentication auth = authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(auth);

        UserInfoDetails user = (UserInfoDetails) auth.getPrincipal();

        String access = tokenService.generateAccessToken(user);
        String refresh = tokenService.generateRefreshToken(user);

        return ResponseEntity.ok(new LoginResponse("User signed in successfully", access, refresh));
    }

    @ExceptionHandler({AuthenticationException.class, RegisterException.class})
    private ResponseEntity<RegisterError> handleAuthenticationError(Exception e) {
        return new ResponseEntity<>(new RegisterError(e.getMessage()), HttpStatus.BAD_REQUEST);
    }
    @PostMapping("/registration")
    public ResponseEntity<LoginResponse> register(@RequestBody RegisterRequest request) throws RegisterException {
        UserInfo user = registrationService.registerUser(request);

        UserInfoDetails details = (UserInfoDetails) userInfoDetailsService.loadUserByUsername(user.getEmail());

        String access = tokenService.generateAccessToken(details);
        String refresh = tokenService.generateRefreshToken(details);
        return ResponseEntity.ok(new LoginResponse("User signed up successfully", access, refresh));
    }

    @GetMapping("token/refresh")
    public ResponseEntity<LoginResponse> refreshToken(HttpServletRequest request) {
        String header = request.getHeader(HttpHeaders.AUTHORIZATION);
        String[] tokens = header.split(" ");
        String refresh = tokens[1];

        String email = tokenService.parseToken(refresh);
        UserInfoDetails user = (UserInfoDetails) userInfoDetailsService.loadUserByUsername(email);

        String access = tokenService.generateAccessToken(user);
        String newRefresh = tokenService.generateRefreshToken(user);

        return ResponseEntity.ok(new LoginResponse("Tokens refreshed successfully", access, newRefresh));
    }
}
