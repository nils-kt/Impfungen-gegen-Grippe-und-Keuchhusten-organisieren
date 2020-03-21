package org.wirvsvirushackathon.impfung;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.wirvsvirushackathon.impfung.Entity.Termin;

/**
 * Hier findet der Zugriff auf die Datenbank statt.
 * @author Yannick
 *
 */
public interface TerminRepository extends MongoRepository<Termin, String> {

}
