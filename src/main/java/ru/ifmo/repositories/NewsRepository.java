package ru.ifmo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.ifmo.models.NewsBlock;

@Repository
public interface NewsRepository extends JpaRepository<NewsBlock, Long> {
}
