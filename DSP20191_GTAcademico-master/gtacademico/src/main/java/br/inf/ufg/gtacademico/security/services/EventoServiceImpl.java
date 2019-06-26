package br.inf.ufg.gtacademico.security.services;

import br.inf.ufg.gtacademico.model.Evento;
import br.inf.ufg.gtacademico.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventoServiceImpl implements EventoService {

    @Autowired
    private EventoRepository repository;

    @Override
    public Evento create(Evento evento) {
        return repository.save(evento);
    }

    @Override
    public Evento delete(Long id) {
        Evento evento = findById(id);
        if(evento != null){
            repository.delete(evento);
        }
        return evento;
    }

    @Override
    public List<Evento> findAll() {
        return repository.findAll();
    }

    @Override
    public Evento findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Evento update(Evento evento) {
        return repository.save(evento);
    }


}
