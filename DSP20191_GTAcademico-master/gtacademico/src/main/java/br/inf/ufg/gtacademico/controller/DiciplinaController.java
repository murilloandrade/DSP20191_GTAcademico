package br.inf.ufg.gtacademico.controller;

import br.inf.ufg.gtacademico.model.Diciplina;

import  br.inf.ufg.gtacademico.security.services.DiciplinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/api/diciplinas"})
public class DiciplinaController {

    @Autowired
    private DiciplinaService diciplinaService;

    @PostMapping
    public Diciplina create(@RequestBody Diciplina diciplina){
        return diciplinaService.create(diciplina);
    }

    @GetMapping(path = {"/{id}"})
    public Diciplina findById(@PathVariable("id") Long id){
        return diciplinaService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public Diciplina update(@PathVariable("id") Long id, @RequestBody Diciplina diciplina){
        diciplina.setId(id);
        return diciplinaService.update(diciplina);
    }

    @DeleteMapping(path = {"/{id}"})
    public Diciplina delete(@PathVariable("id") Long id){
        return diciplinaService.delete(id);
    }

    @GetMapping
    public List<Diciplina> findAll(){
        return diciplinaService.findAll();
    }

}
