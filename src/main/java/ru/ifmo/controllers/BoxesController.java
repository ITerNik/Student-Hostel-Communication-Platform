package ru.ifmo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.ifmo.models.Box;
import ru.ifmo.services.BoxesServices;

import java.util.List;

@RestController
@RequestMapping("/boxes")
@CrossOrigin
public class BoxesController {

    private final BoxesServices boxesServices;

    @Autowired
    public BoxesController(BoxesServices boxesServices) {
        this.boxesServices = boxesServices;
    }

    @GetMapping
    public List<Box> getAll() {
        return boxesServices.findAll();
    }

    @GetMapping("/{id}")
    public Box getBox(@PathVariable(value = "id") long id) {
        return boxesServices.findOne(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Box> update(@PathVariable(value = "id") long id, Box box) {
        Box updatedBox = boxesServices.update(id, box);
        return ResponseEntity.ok(updatedBox);
    }
}
