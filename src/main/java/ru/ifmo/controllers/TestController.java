package ru.ifmo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class TestController {
    @GetMapping("/admin")
    public String admin(Principal principal) {
        return "Hello, " + principal.getName();
    }
    @GetMapping("/user")
    public String user(Principal principal) {
        return "Hello, " + principal.getName();
    }

}
