def tri_utilisateur():
    # Dictionnaire des utilisateurs avec leurs spécificités
    utilisateurs = {
        'user1': {'prenom': 'Alice', 
                  'nom': 'Dupont', 
                  'date_inscription': '2020-05-15'},
        'user2': {'prenom': 'Bob', 
                  'nom': 'Martin', 
                  'date_inscription': '2019-03-22'},
        'user3': {'prenom': 'Charlie', 
                  'nom': 'Durand', 
                  'date_inscription': '2021-07-30'}
    }

    # Fonction pour extraire l'ancienneté à partir de la date d'inscription
    def calculer_anciennete(date_inscription):
        from datetime import datetime
        date_format = "%Y-%m-%d"
        date_inscription = datetime.strptime(date_inscription, date_format)
        return (datetime.now() - date_inscription).days

    # Trier les utilisateurs par ancienneté
    utilisateurs_tries = sorted(utilisateurs.items(), key=lambda item: calculer_anciennete(item[1]['date_inscription']))

    # Afficher les utilisateurs triés
    for user_id, details in utilisateurs_tries:
        print(f"{details['prenom']} {details['nom']} - Date d'inscription: {details['date_inscription']}")

# Appel de la fonction
tri_utilisateur()
