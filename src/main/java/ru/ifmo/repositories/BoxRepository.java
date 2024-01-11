package ru.ifmo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.ifmo.models.Box;

@Repository
public interface BoxRepository extends JpaRepository<Box, Long> {
}
