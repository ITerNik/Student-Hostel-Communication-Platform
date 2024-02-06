package ru.ifmo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
public class CommunicationPlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(CommunicationPlatformApplication.class, args);
    }
}
