package ru.ifmo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.ifmo.models.NewsBlock;
import ru.ifmo.services.NewsService;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RequestMapping("/news")
@RestController
@CrossOrigin
public class NewsController {
    private final NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping
    public List<NewsBlock> getAllNews() {
        return newsService.findAll();
    }

    @GetMapping("/{id}")
    public NewsBlock getNewsBlock(@PathVariable Long id) {
        return newsService.findOne(id);
    }

    @PostMapping
    public ResponseEntity<NewsBlock> createNews(@RequestBody NewsBlock block) throws URISyntaxException {
        NewsBlock savedBlock = newsService.save(block);
        return ResponseEntity.created(new URI("/news/" + savedBlock.getId())).body(savedBlock);
    }

    @PutMapping("/{id}")
    public ResponseEntity<NewsBlock> updateNews(@PathVariable Long id, @RequestBody NewsBlock block) {
        NewsBlock newBlock = newsService.update(id, block);
        return ResponseEntity.ok(newBlock);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable Long id) {
        newsService.delete(id);
        return ResponseEntity.ok().build();
    }
}
