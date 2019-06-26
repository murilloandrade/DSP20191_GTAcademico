package br.inf.ufg.gtacademico.security.services;

import br.inf.ufg.gtacademico.model.Evento;

import java.util.List;

public interface EventoService {

    Evento create(Evento evento);

    Evento delete(Long id);

    List<Evento> findAll();

    Evento findById(Long id);

    Evento update(Evento evento);
}
