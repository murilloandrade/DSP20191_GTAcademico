package  br.inf.ufg.gtacademico.repository;

import  br.inf.ufg.gtacademico.model.Evento;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface EventoRepository extends Repository<Evento, Integer> {

    Evento save(Evento evento);

    List<Evento> findAll();

    Evento findById(Long id);

    void delete(Evento evento);
}
