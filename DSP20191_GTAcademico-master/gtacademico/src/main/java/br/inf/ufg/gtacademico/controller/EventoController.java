package br.inf.ufg.gtacademico.controller;

import  br.inf.ufg.gtacademico.model.Evento;
import  br.inf.ufg.gtacademico.security.services.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/api/eventos"})
public class EventoController {

    @Autowired
    private EventoService eventoService;

    @PostMapping
    public Evento create(@RequestBody Evento evento){
        return eventoService.create(evento);
    }

    @GetMapping(path = {"/{id}"})
    public Evento findById(@PathVariable("id") Long id){
        return eventoService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public Evento update(@PathVariable("id") Long id, @RequestBody Evento evento){
        evento.setId(id);
        return eventoService.update(evento);
    }

    @DeleteMapping(path = {"/{id}"})
    public Evento delete(@PathVariable("id") Long id){
        return eventoService.delete(id);
    }

    @GetMapping
    public List<Evento> findAll(){
        return eventoService.findAll();
    }


}
