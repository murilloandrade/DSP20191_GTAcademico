package br.inf.ufg.gtacademico.controller;

import  br.inf.ufg.gtacademico.model.User;
import br.inf.ufg.gtacademico.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/api/users"})
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User create(@RequestBody User user) {
        return userService.create(user);
    }

    @PutMapping(path = {"/{id}"})
    public User update(@PathVariable("id") Long id, @RequestBody User user) {
        user.setId(id);
        return userService.update(user);
    }

    @GetMapping(path = {"/{id}"})
    public User findById(@PathVariable("id") Long id) {
        return userService.findById(id).get();
    }

    @GetMapping(path = {"/{name}"})
    public User findByName(@PathVariable("name") String name) {
        return userService.findByName(name);
    }

    @GetMapping
    public List<User> findAll() {
        return userService.findAll();
    }

}
