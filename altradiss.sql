create database altradiss
CREATE EXTENSION pgcrypto;
SELECT crypt('mdp123456', gen_salt('bf'));

create table administrateur(
    id serial primary key,
    nom varchar(250),
    prenom varchar(250),
    email varchar(200)
    mdp varchar(50)
);

----user-----
create table type_client(
    id serial primary key,
    types varchar(150)
);

create table client(
    id serial primary key,
    idtype int,
    nom varchar(250),
    adresse varchar(250),
    contacte varchar(250),
    email varchar(200),
    motdepasse varchar(50),
    etat varchar(250),
    daty DATE DEFAULT CURRENT_DATE,
    CONSTRAINT fk_type  FOREIGN KEY(idtype) REFERENCES type_client(id) ON DELETE SET NULL
);

create table societe(
    id serial primary key,
    idclient int,
    nif varchar(250),
    stat varchar(250),
    CONSTRAINT fk_client
      FOREIGN KEY(idclient) 
	  REFERENCES client(id)
	  ON DELETE SET NULL
);
---------------
/*create table message_visiteur(
    id serial primary key,
    nom varchar(250),
    prenom varchar(250),
    email varchar(100),
    contacte varchar(50),
    message text
);*/
--------Produit-----------
create table categorie_produit(
    id serial primary key,
    categorie varchar(250)
);

insert into categorie_produit (categorie) value ('Software'),('Hardware');

create table produit(
    id serial primary key,
    idcategorie int,
    marque varchar(150),
    nom_produit varchar(250),
    CONSTRAINT fk_categorie FOREIGN KEY (idcategorie) REFERENCES categorie_produit(id) ON DELETE SET NULL
);

create table caracteristique(
    
);

create table prix_produit(
    id serial primary key,
    idproduit Int ,
    prix decimal(10,2),
    date_prix date,
    CONSTRAINT fk_prix FOREIGN KEY (idproduit) REFERENCES produit(id) ON DELETE SET NULL
);

------VENTE--------

create table commande (
    id serial primary key,
    idclient int,
    dateCommande date ,
    total decimal(10,2),
    etat varchar(250)
);

create table detailcommande(
    id serial primary key,
    idcommande int ,
    idproduit int ,
    quantite decimal(10,2) default 1.0,
    prix_unitaire decimal(10,2) default 0.0,
    total decimal(10,2) default 0.0
);

create table services(
    id serial primary key,
    idclient int,
    dateservices date,
    materiel varchar(200),
    marque varchar(250),
    serial_number varchar(200),
    status varchar(200),
    etat varchar(250),
    CONSTRAINT fk_clt FOREIGN KEY (idclient) REFERENCES client(id) ON DELETE SET NULL
);

create table commande_special(
    id serial primary key,
    idclient int,
    idcategorie int,
    datecmd date,
    nom varchar(250),
    caracteristique text,
    etat varchar(250),
    CONSTRAINT fk_clt1 FOREIGN KEY (idclient) REFERENCES client(id) ON DELETE SET NULL,
    CONSTRAINT fk_categorie1 FOREIGN KEY (idcategorie) REFERENCES categorie_produit(id) ON DELETE SET NULL
);

--------VIEW-----------
create view _clients as
select client.*,t.types from client client
join type_client t 
on client.idtype=t.id;

create view _statTypes as
select row_number() OVER () AS id, t.types, count(id) as nbr from _clients t  group by idtype,types;

create view _produit as
select produit.*,cat.categorie,prix.prix,date_prix from produit produit
join categorie_produit cat on produit.idcategorie=cat.id
join prix_produit prix on prix.idproduit=produit.id;