package ru.ifmo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.ifmo.models.NewsBlock;
import ru.ifmo.repositories.NewsRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class NewsService {
    private final NewsRepository newsRepository;

    @Autowired
    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<NewsBlock> findAll() {
        return newsRepository.findAll();
    }

    public NewsBlock findOne(long id) {
        return newsRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Transactional
    public NewsBlock save(NewsBlock block) {
        return newsRepository.save(block);
    }

    @Transactional
    public NewsBlock update(long id, NewsBlock block) {
        block.setId(id);
        return newsRepository.save(block);
    }

    @Transactional
    public void delete(long id) {
        newsRepository.deleteById(id);
    }
}
