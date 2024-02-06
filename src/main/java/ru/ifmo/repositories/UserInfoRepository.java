package ru.ifmo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.ifmo.models.UserInfo;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
    public Optional<UserInfo> findUserInfoByEmail(String email);
}
