package ru.ifmo.security;

import com.auth0.jwt.exceptions.JWTVerificationException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import ru.ifmo.services.CredentialsService;

import java.io.IOException;

@Component
public class JWTFilter extends OncePerRequestFilter {

    private final JWTUtil jwt;
    private final CredentialsService credentialsService;

    public JWTFilter(CredentialsService credentialsService, JWTUtil jwt) {
        this.credentialsService = credentialsService;
        this.jwt = jwt;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
            String header = request.getHeader("Authorization");

            if (header != null) {
                String[] tokens = header.split(" ");

                if (tokens.length == 2 && tokens[0].equals("Bearer")) {
                    try {
                        String username = jwt.validateToken(tokens[1]);
                        UserDetails details = credentialsService.loadUserByUsername(username);

                        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                                details, details.getPassword(), details.getAuthorities());

                        if (SecurityContextHolder.getContext().getAuthentication() == null) {
                            SecurityContextHolder.getContext().setAuthentication(auth);
                        }
                    } catch (JWTVerificationException e) {
                        response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid JWT Token");
                    }
                }
            }
    }
}
