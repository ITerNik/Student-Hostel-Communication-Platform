package ru.ifmo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.ifmo.models.Box;
import ru.ifmo.repositories.BoxesRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class BoxesServices {
    private final BoxesRepository boxesRepository;

    @Autowired
    public BoxesServices(BoxesRepository boxesRepository) {
        this.boxesRepository = boxesRepository;
    }

    public List<Box> findAll() {
        return boxesRepository.findAll();
    }

    public Box findOne(long id) {
        return boxesRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Transactional
    public Box update (long id, Box box) {
        box.setId(id);
        return boxesRepository.save(box);
    }
}
