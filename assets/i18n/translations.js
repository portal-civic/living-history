const translations = {
  es: {
    slide01: {
      title: "Introducción: La memoria cultural en la era de la IA",
      text: [
        "La inteligencia artificial está transformando la forma en que comprendemos, transmitimos y preservamos el patrimonio cultural.",
        "El proyecto europeo Living History: AI-powered Cultural Heritage, cofinanciado por el programa Erasmus+, nace con el objetivo de utilizar herramientas digitales avanzadas para dar nueva vida a la historia local y conectar a generaciones a través de la tecnología.",
        "Desde Altea (España), en colaboración con Karditsa (Grecia) y Molfetta (Italia), este proyecto desarrolla una metodología replicable para que cualquier comunidad pueda mapear, digitalizar y comunicar su patrimonio mediante IA y herramientas educativas innovadoras."
      ]
    },
    slide02: {
      title: "Objetivos del proyecto y alcance de la guía",
      bullets: [
        "Promover el patrimonio cultural local utilizando herramientas de IA.",
        "Formar a adultos y docentes en el uso de IA para recuperar historias y personajes.",
        "Impulsar el aprendizaje intergeneracional y reducir la brecha digital.",
        "Desarrollar una metodología transferible a cualquier territorio europeo."
      ],
      text: "Esta guía tiene como finalidad servir como manual práctico, ofreciendo los pasos, herramientas y ejemplos reales que faciliten la replicación del modelo Living History en otros municipios o instituciones.",
      popup_altea: {
        title: "Altea", role: "Socio", country_label: "País", country: "España",
        entity: "Ajuntament d'Altea / EuroAltea",
        text: "Municipio mediterráneo con una fuerte apuesta por la cultura, la participación y la innovación educativa. A través de EuroAltea y la colaboración con centros educativos y agentes locales, actúa como laboratorio vivo para la implementación y validación del proyecto."
      },
      popup_molfetta: {
        title: "Molfetta", role: "Líder", country_label: "País", country: "Italia",
        entity: "Associazione InCo Molfetta APS",
        text: "Organización especializada en proyectos europeos, educación de personas adultas e innovación social. Lidera la coordinación del proyecto, integrando metodologías pedagógicas y herramientas digitales para la valorización del patrimonio cultural."
      },
      popup_karditsa: {
        title: "Karditsa", role: "Socio", country_label: "País", country: "Grecia",
        entity: "SVERONIS I. & SIA O.E. (E-School)",
        text: "Organización con amplia experiencia en e-learning y desarrollo de contenidos digitales. Contribuye al proyecto aportando soluciones tecnológicas y conocimiento en digitalización del patrimonio cultural."
      }
    },
    slide03: {
      title: "Cómo utilizar la IA para la explotación del patrimonio cultural",
      text: [
        "La IA permite transformar datos históricos en experiencias vivas.",
        "Desde la creación de chatbots históricos hasta recorridos virtuales con realidad aumentada, las posibilidades son múltiples.",
        "Ejemplos prácticos:"
      ],
      bullets: [
        "Chatbots históricos: permiten a visitantes conversar con personajes como “El Guerrero de la Estela Ibérica”",
        "Análisis de archivos y fotografías antiguas: la IA puede reconocer lugares y vincularlos a relatos orales.",
        "Recorridos con códigos QR: los usuarios escanean un punto del municipio y acceden a un avatar que narra la historia del lugar."
      ],
      chatbot: {
        name: "El Guerrero de la Estela Ibérica",
        status: "● En línea",
        greeting: "¡Salve! Soy el espíritu del guerrero ibérico que habitó estas tierras hace más de 2.000 años. ¿Qué deseas saber sobre nuestra época?",
        q1: "¿Cómo era la vida en Altea hace 2000 años?",
        a1: "En aquellos tiempos, estas tierras eran ricas en tradición ibérica. Cultivábamos olivos y vid, comerciábamos con los pueblos del Mediterráneo y honrábamos a nuestros dioses con rituales que hoy apenas se recuerdan. La estela que porta mi imagen fue labrada por manos sabias para que mi memoria perdurase.",
        q2: "¿Qué era la Estela Ibérica?",
        a2: "La estela es una piedra tallada con mi figura, símbolo de honor y poder entre los iberos. Era costumbre erigir estas losas en puntos estratégicos del territorio para marcar linajes, victorias o territorios. La mía fue hallada en estas colinas mediterráneas, testimonio de una civilización que amaba la belleza y la fuerza por igual.",
        q3: "¿Qué legado dejaron los iberos en Altea?",
        a3: "El legado ibero en estas tierras es profundo: desde el trazado de los primeros caminos hasta las técnicas agrícolas que los romanos adoptaron. Los topónimos, algunos rituales festivos y la propia devoción por el territorio siguen siendo ecos de nuestra presencia. La memoria no muere mientras haya quienes la busquen.",
        placeholder: "Escribe tu pregunta..."
      }
    },
    slide04: {
      title: "Metodología replicable: paso a paso",
      steps: [
        {
          title: "Identificación del patrimonio local",
          bullets: [
            "Reúne historias, leyendas y personajes relevantes.",
            "Implica a escuelas, asociaciones y mayores del lugar."
          ]
        },
        {
          title: "Recopilación y curación de datos culturales",
          bullets: [
            "Clasifica textos, fotos, grabaciones y testimonios orales."
          ]
        },
        {
          title: "Digitalización y estructuración de la información",
          bullets: [
            "Convierte los contenidos a formatos digitales (texto, imagen, audio)."
          ]
        },
        {
          title: "Entrenamiento de modelos de IA",
          bullets: [
            "Usa herramientas accesibles (ChatGPT, DeepAI, Gemini, Claude)."
          ]
        },
        {
          title: "Diseño de la experiencia interactiva",
          bullets: [
            "Define la personalidad del avatar, tono y límites éticos."
          ]
        },
        {
          title: "Instalación y difusión local",
          bullets: [
            "Implementa rutas con QR o espacios interactivos."
          ]
        },
        {
          title: "Evaluación y sostenibilidad",
          bullets: [
            "Mide impacto educativo, turístico y social."
          ]
        }
      ]
    },
    slide05: {
      title: "Mejorar las habilidades digitales de los adultos",
      text: [
        "El proyecto Living History promueve el aprendizaje práctico de la IA entre adultos y docentes.",
        "A través de talleres formativos, se enseña a entrenar chatbots y gestionar datos culturales.",
        "El objetivo es acercar la tecnología a quienes normalmente no la usan, reforzando la confianza digital de los ciudadanos.",
        "Las formaciones locales realizadas en Altea con el IES Bellaguarda son un ejemplo de cómo la IA puede integrarse en la enseñanza, el turismo y la cultura local."
      ]
    },
    slide06: {
      title: "Adaptar contenidos históricos a la formación en IA",
      text: [
        "La IA no reemplaza la historia: la amplifica.",
        "Para que la IA pueda aprender, necesita materiales estructurados:",
        "Los docentes pueden utilizar estas herramientas para que los estudiantes participen en la creación de avatares históricos, fortaleciendo su comprensión de la historia local y su pensamiento crítico digital."
      ],
      bullets: [
        "Textos claros, cronologías, descripciones y anécdotas.",
        "Lenguaje inclusivo y neutral.",
        "Varios formatos: texto, imagen, voz."
      ]
    },
    slide07: {
      title: "Transferencia a otros contextos y municipios",
      text: [
        "El enfoque de Living History es completamente transferible:",
        "El secreto está en adaptar la escala: un pequeño municipio puede empezar con un único avatar o ruta interactiva y crecer progresivamente."
      ],
      bullets: [
        "Puede aplicarse en zonas rurales para combatir el despoblamiento.",
        "En ciudades turísticas, puede diversificar la oferta cultural.",
        "En escuelas, fomenta la educación digital y patrimonial."
      ]
    },
    slide08: {
      title: "Impacto y sostenibilidad",
      text: [
        "El éxito del proyecto se mide tanto en la participación social como en el uso real de las herramientas creadas.",
        "Algunos indicadores sugeridos:"
      ],
      bullets: [
        "N.º de historias o lugares digitalizados.",
        "Participantes en talleres y sesiones locales.",
        "Visitas a QR o interacción con avatares.",
        "Nuevas colaboraciones generadas."
      ]
    },
    slide09: {
      title: "Consejos prácticos para iniciar tu propio “Living History”",
      bullets: [
        "Empieza con un pequeño piloto: un personaje, una historia, un barrio.",
        "Crea un grupo local de apoyo (centro educativo + técnicos + asociaciones).",
        "Usa herramientas accesibles, evita desarrollos costosos.",
        "Documenta todo: testimonios, fotos, entrevistas.",
        "Celebra los resultados con la comunidad: exposición, paseo, acto público."
      ],
      final_popup: {
        title: "🎉 ¡Listo para lanzar tu propio Living History!",
        text: "Has completado todos los pasos. Ahora es el momento de empezar.",
        button: "Continuar →"
      }
    },
    slide10: {
      title: "Recursos y anexos",
      resources: [
        "Enlace a bancos de datos culturales europeos (Europeana, Wikimedia Commons).",
        "Enlace al programa Erasmus+: https://erasmus-plus.ec.europa.eu"
      ],
      footer_quote: "Cada historia local puede transformarse en un diálogo vivo entre pasado y futuro. La inteligencia artificial nos da la voz; la memoria, el alma."
    },
    ui: {
      disclaimer: "Financiado por la Unión Europea. Las opiniones y puntos de vista expresados solo comprometen a su(s) autor(es) y no reflejan necesariamente los de la Unión Europea o los de la Agencia Ejecutiva Europea de Educación y Cultura (EACEA). Ni la Unión Europea ni la EACEA pueden ser considerados responsables de ellos."
    }
  },
  va: {
    slide01: {
      title: "Introducció: la memòria cultural en l’era de la IA",
      text: [
        "La intel·ligència artificial està transformant la forma en què comprenem, transmetem i preservem el patrimoni cultural.",
        "El projecte europeu Living History: AI-powered Cultural Heritage, cofinançat pel programa Erasmus+, naix amb l’objectiu d’utilitzar ferramentes digitals avançades per a donar una nova vida a la història local i connectar a generacions a través de la tecnologia.",
        "Des d’Altea (Espanya), en col·laboració amb Karditsa (Grècia) i Molfetta (Itàlia), aquest projecte desenvolupa una metodologia reproduïble perquè qualsevol comunitat puga fer un mapa, digitalitzar i comunicar el seu patrimoni mitjançant IA i ferramentes educatives innovadores."
      ]
    },
    slide02: {
      title: "Objectius del projecte i abast de la guia",
      bullets: [
        "Promoure el patrimoni cultural local utilitzant ferramentes d’IA.",
        "Formar a adults i docents en l’ús de la IA per a recuperar històries i personatges.",
        "Impulsar l’aprenentatge intergeneracional i reduir el biaix digital.",
        "Desenvolupar una metodologia transferible a qualsevol territori europeu."
      ],
      text: "Aquesta guia té com a finalitat servir com a manual pràctic, oferint els passos, ferramentes i exemples reals que faciliten la replicació del model Living History en altres municipis o institucions.",
      popup_altea: {
        title: "Altea", role: "Soci", country_label: "País", country: "Espanya",
        entity: "Ajuntament d'Altea / EuroAltea",
        text: "Municipi mediterrani amb una forta aposta per la cultura, la participació i la innovació educativa. A través d'EuroAltea i la col·laboració amb centres educatius i agents locals, actua com a laboratori viu per a la implementació i validació del projecte."
      },
      popup_molfetta: {
        title: "Molfetta", role: "Líder", country_label: "País", country: "Itàlia",
        entity: "Associazione InCo Molfetta APS",
        text: "Organització especialitzada en projectes europeus, educació de persones adultes i innovació social. Lidera la coordinació del projecte, integrant metodologies pedagògiques i ferramentes digitals per a la valorització del patrimoni cultural."
      },
      popup_karditsa: {
        title: "Karditsa", role: "Soci", country_label: "País", country: "Grècia",
        entity: "SVERONIS I. & SIA O.E. (E-School)",
        text: "Organització amb àmplia experiència en e-learning i desenvolupament de continguts digitals. Contribueix al projecte aportant solucions tecnològiques i coneixement en digitalització del patrimoni cultural."
      }
    },
    slide03: {
      title: "Com utilitzar la IA per a l’explotació del patrimoni cultural",
      text: [
        "La IA permet transformar dades històriques en experiències vives.",
        "Des de la creació de xatbots històrics fins a recorreguts virtuals amb realitat augmentada, les possibilitats són múltiples.",
        "Exemples pràctics:"
      ],
      bullets: [
        "Xatbots històrics: permeten a visitants conversar amb personatges com “El Guerrer de l’Estela Ibèrica”",
        "Anàlisi d’arxius i fotografies antigues: la IA pot reconéixer llocs i vincular-los a relats orals.",
        "Recorreguts amb codis QR: els usuaris escanegen un punt del municipi i accedeixen a un avatar que narra la història del lloc."
      ],
      chatbot: {
        name: "El Guerrer de l’Estela Ibèrica",
        status: "● En línia",
        greeting: "Salut! Sóc l’esperit del guerrer ibèric que va habitar aquestes terres fa més de 2.000 anys. Què vols saber sobre la nostra època?",
        q1: "Com era la vida a Altea fa 2000 anys?",
        a1: "En aquells temps, aquestes terres eren riques en tradició ibèrica. Cultivàvem oliveres i vinya, comerciàvem amb els pobles del Mediterrani i honràvem els nostres déus amb rituals que hui amb prou faenes es recorden. L’estela que porta la meua imatge va ser tallada per mans sàvies perquè la meua memòria perdurara.",
        q2: "Què era l’Estela Ibèrica?",
        a2: "L’estela és una pedra tallada amb la meua figura, símbol d’honor i poder entre els ibers. Era costum erigir aquestes lloses en punts estratègics del territori per a marcar llinatges, victòries o territoris. La meua va ser trobada en aquestes colines mediterrànies, testimoni d’una civilització que estimava la bellesa i la força per igual.",
        q3: "Quin llegat van deixar els ibers a Altea?",
        a3: "El llegat iber en aquestes terres és profund: des del traçat dels primers camins fins a les tècniques agrícoles que els romans van adoptar. Els topònims, alguns rituals festius i la mateixa devoció pel territori continuen sent ecos de la nostra presència. La memòria no mor mentre hi haja qui la busque.",
        placeholder: "Escriu la teua pregunta..."
      }
    },
    slide04: {
      title: "Metodologia reproduïble: pas a pas",
      steps: [
        {
          title: "Identificació del patrimoni local",
          bullets: [
            "Reuneix històries, llegendes i personatges rellevants.",
            "Implica a escoles, associacions i majors del lloc."
          ]
        },
        {
          title: "Recopilació i cura de dades culturals",
          bullets: [
            "Classifica textos, fotos, gravacions i testimonis orals."
          ]
        },
        {
          title: "Digitalització i estructuració de la informació",
          bullets: [
            "Converteix els continguts a formats digitals (text, imatge, àudio)."
          ]
        },
        {
          title: "Entrenament de models d’IA",
          bullets: [
            "Usa ferramentes accessibles (ChatGPT, DeepAI, Gemini, Claude)."
          ]
        },
        {
          title: "Disseny de l’experiència interactiva",
          bullets: [
            "Defineix la personalitat de l’avatar, to i límits ètics."
          ]
        },
        {
          title: "Instal·lació i difusió local",
          bullets: [
            "Implementa rutes amb QR o espais interactius."
          ]
        },
        {
          title: "Avaluació i sostenibilitat",
          bullets: [
            "Mesura l’impacte educatiu, turístic i social."
          ]
        }
      ]
    },
    slide05: {
      title: "Millorar les habilitats digitals dels adults",
      text: [
        "El projecte Living History promou l’aprenentatge pràctic de la IA entre adults i docents.",
        "A través de tallers formatius, s’ensenya a entrenar xatbots i gestionar dades culturals.",
        "L’objectiu és apropar la tecnologia a qui normalment no la usa, reforçant la confiança digital dels ciutadans.",
        "Les formacions locals realitzades a Altea amb l’IES Bellaguarda són un exemple de com la IA pot integrar-se en l’ensenyança, el turisme i la cultura local."
      ]
    },
    slide06: {
      title: "Adaptar continguts històrics a la formació en IA",
      text: [
        "La IA no reemplaça la història: l’amplifica.",
        "Perquè la IA puga aprendre, necessita materials estructurats:",
        "Els docents poden utilitzar aquestes ferramentes perquè els estudiants participen en la creació d’avatars històrics, enfortint la seua comprensió de la història local i el seu pensament crític digital."
      ],
      bullets: [
        "Textos clars, cronologies, descripcions i anècdotes.",
        "Llenguatge inclusiu i neutral.",
        "Diversos formats: text, imatge, veu."
      ]
    },
    slide07: {
      title: "Transferència a altres contextos i municipis",
      text: [
        "L’enfocament de Living History és completament transferible:",
        "El secret està en adaptar l’escala: un xicotet municipi pot començar amb un únic avatar o ruta interactiva i créixer progressivament."
      ],
      bullets: [
        "Pot aplicar-se a zones rurals per a combatre el despoblament.",
        "En ciutats turístiques, pot diversificar l’oferta cultural.",
        "En escoles, fomenta l’educació digital i patrimonial."
      ]
    },
    slide08: {
      title: "Impacte i sostenibilitat",
      text: [
        "L’èxit del projecte es mesura tant en la participació social com en l’ús real de les ferramentes creades.",
        "Alguns indicadors suggerits:"
      ],
      bullets: [
        "Nre. d’històries o llocs digitalitzats.",
        "Participants en tallers i sessions locals.",
        "Visites a QR o interacció amb avatars.",
        "Noves col·laboracions generades."
      ]
    },
    slide09: {
      title: "Consells pràctics per a iniciar el teu propi “Living History”",
      bullets: [
        "Comença amb un xicotet pilot: un personatge, una història, un barri.",
        "Crea un grup local de suport (centre educatiu + tècnics + associacions).",
        "Usa ferramentes accessibles, evita desenvolupaments costosos.",
        "Documenta tot: testimonis, fotos, entrevistes.",
        "Celebra els resultats amb la comunitat: exposició, passeig, acte públic."
      ],
      final_popup: {
        title: "🎉 Ja estàs preparat per a llançar el teu propi Living History!",
        text: "Has completat tots els passos. Ara és el moment de començar.",
        button: "Continuar →"
      }
    },
    slide10: {
      title: "Recursos i annexos",
      resources: [
        "Enllaç a bancs de dades culturals europees (Europeana, Wikimedia Commons).",
        "Enllaç al programa Erasmus+: https://erasmus-plus.ec.europa.eu"
      ],
      footer_quote: "Cada història local pot transformar-se en un diàleg viu entre passat i futur. La intel·ligència artificial ens dona la veu; la memòria, l’ànima."
    },
    ui: {
      disclaimer: "Finançat per la Unió Europea. Les opinions i punts de vista expressats només comprometen al seu(s) autor(es) i no reflecteixen necessàriament els de la Unió Europea o els de l’Agència Executiva Europea d’Educació i Cultura (EACEA). Ni la Unió Europea ni la EACEA poden ser considerats responsables d’ells."
    }
  },
  it: {
    slide01: {
      title: "Introduzione: La memoria culturale nell'era dell'IA",
      text: [
        "L'intelligenza artificiale sta trasformando il modo in cui comprendiamo, trasmettiamo e preserviamo il patrimonio culturale.",
        "Il progetto europeo Living History: AI-powered Cultural Heritage, cofinanziato dal programma Erasmus+, mira a utilizzare strumenti digitali avanzati per riportare in vita la storia locale e connettere le generazioni attraverso la tecnologia.",
        "Partendo da Altea (Spagna), in collaborazione con Karditsa (Grecia) e Molfetta (Italia), questo progetto sviluppa una metodologia replicabile affinché qualsiasi comunità possa mappare, digitalizzare e comunicare il proprio patrimonio utilizzando l'IA e strumenti educativi innovativi."
      ]
    },
    slide02: {
      title: "Obiettivi del progetto e ambito della guida",
      bullets: [
        "Promuovere il patrimonio culturale locale utilizzando strumenti di IA.",
        "Formare adulti e insegnanti all'uso dell'IA per recuperare storie e personaggi.",
        "Promuovere l'apprendimento intergenerazionale e ridurre il divario digitale.",
        "Sviluppare una metodologia trasferibile a qualsiasi territorio europeo."
      ],
      text: "Questa guida si propone come un manuale pratico ricco di passaggi, strumenti ed esempi reali per facilitare la replicazione del modello Living History in altri comuni o istituzioni.",
      popup_altea: {
        title: "Altea", role: "Partner", country_label: "Paese", country: "Spagna",
        entity: "Ajuntament d'Altea / EuroAltea",
        text: "Comune mediterraneo con una forte vocazione per la cultura, la partecipazione e l'innovazione educativa. Attraverso EuroAltea e la collaborazione con scuole e attori locali, funge da laboratorio vivo per l'implementazione e la validazione del progetto."
      },
      popup_molfetta: {
        title: "Molfetta", role: "Capofila", country_label: "Paese", country: "Italia",
        entity: "Associazione InCo Molfetta APS",
        text: "Organizzazione specializzata in progetti europei, educazione degli adulti e innovazione sociale. Coordina il progetto integrando metodologie pedagogiche e strumenti digitali per la valorizzazione del patrimonio culturale."
      },
      popup_karditsa: {
        title: "Karditsa", role: "Partner", country_label: "Paese", country: "Grecia",
        entity: "SVERONIS I. & SIA O.E. (E-School)",
        text: "Organizzazione con ampia esperienza nell'e-learning e nello sviluppo di contenuti digitali. Contribuisce al progetto offrendo soluzioni tecnologiche e competenze nella digitalizzazione del patrimonio culturale."
      }
    },
    slide03: {
      title: "Come utilizzare l'IA per la valorizzazione del patrimonio culturale",
      text: [
        "L'IA permette di trasformare i dati storici in esperienze vive.",
        "Dalla creazione di chatbot storici ai tour virtuali con realtà aumentata, le possibilità sono molteplici.",
        "Esempi pratici:"
      ],
      bullets: [
        "Chatbot storici: permettono ai visitatori di conversare con personaggi come \"Il Guerriero della Stele Iberica\".",
        "Analisi di archivi e vecchie fotografie: l'IA può riconoscere i luoghi e collegarli a racconti orali.",
        "Tour con codici QR: gli utenti scansionano un punto nel comune e accedono a un avatar che narra la storia del luogo."
      ],
      chatbot: {
        name: "Il Guerriero della Stele Iberica",
        status: "● Online",
        greeting: "Salve! Sono lo spirito del guerriero iberico che abitò queste terre più di 2.000 anni fa. Cosa desideri sapere della nostra epoca?",
        q1: "Com'era la vita ad Altea 2000 anni fa?",
        a1: "In quei tempi, queste terre erano ricche di tradizione iberica. Coltivavamo ulivi e vite, commerciavamo con i popoli del Mediterraneo e onoravamo i nostri dèi con rituali che oggi sono quasi dimenticati. La stele che porta la mia immagine fu scolpita da mani sagge affinché la mia memoria durasse nel tempo.",
        q2: "Che cos'era la Stele Iberica?",
        a2: "La stele è una pietra scolpita con la mia figura, simbolo di onore e potere tra gli iberi. Era usanza erigere queste lastre in punti strategici del territorio per segnare lignaggi, vittorie o territori. La mia fu ritrovata su queste colline mediterranee, testimonianza di una civiltà che amava allo stesso modo la bellezza e la forza.",
        q3: "Quale eredità hanno lasciato gli iberi ad Altea?",
        a3: "L'eredità iberica in queste terre è profonda: dal tracciato delle prime strade alle tecniche agricole adottate poi dai romani. I toponimi, alcuni rituali festivi e la stessa devozione per il territorio restano echi della nostra presenza. La memoria non muore finché c'è chi la cerca.",
        placeholder: "Scrivi la tua domanda..."
      }
    },
    slide04: {
      title: "Metodologia replicabile: Passo dopo passo",
      steps: [
        {
          title: "Identificazione del Patrimonio Locale",
          bullets: [
            "Raccogliere storie, leggende e personaggi rilevanti.",
            "Coinvolgere scuole, associazioni e anziani del territorio."
          ]
        },
        {
          title: "Raccolta e Cura dei Dati Culturali",
          bullets: [
            "Classificare testi, foto, registrazioni e testimonianze orali."
          ]
        },
        {
          title: "Digitalizzazione e Strutturazione delle Informazioni",
          bullets: [
            "Convertire i contenuti in formati digitali (testo, immagine, audio)."
          ]
        },
        {
          title: "Addestramento dei Modelli di IA",
          bullets: [
            "Utilizzare strumenti accessibili (ChatGPT, DeepAI, Gemini, Claude)."
          ]
        },
        {
          title: "Progettazione dell'Esperienza Interattiva",
          bullets: [
            "Definire la personalità, il tono e i limiti etici dell'avatar."
          ]
        },
        {
          title: "Installazione Locale e Diffusione",
          bullets: [
            "Implementare percorsi con QR o spazi interattivi."
          ]
        },
        {
          title: "Valutazione e Sostenibilità",
          bullets: [
            "Misurare l'impatto educativo, turistico e sociale."
          ]
        }
      ]
    },
    slide05: {
      title: "Migliorare le competenze digitali degli adulti",
      text: [
        "Il progetto “Living History” promuove l'apprendimento pratico dell'IA tra adulti e insegnanti.",
        "Attraverso workshop formativi, insegna come addestrare chatbot e gestire dati culturali.",
        "L'obiettivo è avvicinare la tecnologia a coloro che normalmente non la usano, rafforzando la fiducia dei cittadini sul digitale.",
        "I laboratori locali condotti ad Altea con lo IES Bellaguarda sono un esempio di come l'IA possa essere integrata nell'insegnamento, nel turismo e nella cultura locale."
      ]
    },
    slide06: {
      title: "Adattamento dei contenuti storici all'addestramento dell'IA",
      text: [
        "L'IA non sostituisce la storia: la amplifica.",
        "Affinché l'IA possa imparare, ha bisogno di materiali strutturati:",
        "Gli insegnanti possono utilizzare questi strumenti per coinvolgere gli studenti nella creazione di avatar storici, rafforzando la loro comprensione della storia locale e il pensiero critico sul digitale."
      ],
      bullets: [
        "Testi chiari, cronologie, descrizioni e aneddoti.",
        "Linguaggio inclusivo e neutrale.",
        "Vari formati: testo, immagine, voce."
      ]
    },
    slide07: {
      title: "Trasferimento in altri contesti e comuni",
      text: [
        "L'approccio Living History è pienamente trasferibile:",
        "Il segreto sta nell'adattare la scala: un piccolo comune può iniziare con un singolo avatar o un percorso interattivo e crescere progressivamente."
      ],
      bullets: [
        "Può essere applicato nelle aree rurali per combattere lo spopolamento.",
        "Nelle città turistiche, può diversificare l'offerta culturale.",
        "Nelle scuole, promuove l'educazione al digitale e al patrimonio."
      ]
    },
    slide08: {
      title: "Impatto e sostenibilità",
      text: [
        "Il successo del progetto si misura sia in termini di partecipazione sociale che di effettivo utilizzo degli strumenti creati.",
        "Alcuni indicatori suggeriti:"
      ],
      bullets: [
        "Numero di storie o luoghi digitalizzati.",
        "Partecipanti ai workshop e alle sessioni locali.",
        "Visite ai QR o interazione con gli avatar.",
        "Nuove collaborazioni generate."
      ]
    },
    slide09: {
      title: "Consigli pratici per avviare il tuo \"Living History\"",
      bullets: [
        "Inizia con un piccolo progetto pilota: un personaggio, una storia, un quartiere.",
        "Crea un gruppo di supporto locale (centro educativo + tecnici + associazioni).",
        "Utilizza strumenti accessibili, evita sviluppi costosi.",
        "Documenta tutto: testimonianze, foto, interviste.",
        "Celebra i risultati con la comunità: mostra, passeggiata, evento pubblico."
      ],
      final_popup: {
        title: "🎉 Pronto per lanciare il tuo Living History!",
        text: "Hai completato tutti i passaggi. Ora è il momento di iniziare.",
        button: "Continua →"
      }
    },
    slide10: {
      title: "Risorse e allegati",
      resources: [
        "Link alle banche dati culturali europee (Europeana, Wikimedia Commons).",
        "Link al programma Erasmus+: https://erasmus-plus.ec.europa.eu"
      ],
      footer_quote: "Ogni storia locale può essere trasformata in un dialogo vivo tra passato e futuro. L'intelligenza artificiale le dà voce; la memoria la anima."
    },
    ui: {
      disclaimer: "Finanziato dall'Unione europea. Le opinioni espresse appartengono, tuttavia, al solo o ai soli autori e non riflettono necessariamente le opinioni dell'Unione europea o dell'Agenzia esecutiva europea per l'istruzione e la cultura (EACEA). Né l'Unione europea né l'EACEA possono esserne ritenute responsabili."
    }
  },
  en: {
    slide01: {
      title: "Introduction: Cultural Memory in the AI Era",
      text: [
        "Artificial intelligence is transforming the way we understand, transmit, and preserve cultural heritage.",
        "The European project Living History: AI-powered Cultural Heritage, co-financed by the Erasmus+ programme, aims to use advanced digital tools to bring local history back to life and connect generations through technology.",
        "From Altea (Spain), in collaboration with Karditsa (Greece) and Molfetta (Italy), this project develops a replicable methodology so that any community can map, digitize, and communicate its heritage using AI and innovative educational tools."
      ]
    },
    slide02: {
      title: "Project Objectives and Guide Scope",
      bullets: [
        "Promote local cultural heritage using AI tools.",
        "Train adults and teachers in using AI to recover stories and characters.",
        "Promote intergenerational learning and reduce the digital divide.",
        "Develop a transferable methodology to any European territory."
      ],
      text: "This guide aims to serve as a practical manual, offering steps, tools, and real examples to facilitate the replication of the Living History model in other municipalities or institutions.",
      popup_altea: {
        title: "Altea", role: "Partner", country_label: "Country", country: "Spain",
        entity: "Ajuntament d'Altea / EuroAltea",
        text: "Mediterranean municipality strongly committed to culture, participation, and educational innovation. Through EuroAltea and collaboration with schools and local stakeholders, it acts as a living lab for the implementation and validation of the project."
      },
      popup_molfetta: {
        title: "Molfetta", role: "Lead Partner", country_label: "Country", country: "Italy",
        entity: "Associazione InCo Molfetta APS",
        text: "Organization specialized in European projects, adult education, and social innovation. It leads project coordination, integrating pedagogical methodologies and digital tools for the enhancement of cultural heritage."
      },
      popup_karditsa: {
        title: "Karditsa", role: "Partner", country_label: "Country", country: "Greece",
        entity: "SVERONIS I. & SIA O.E. (E-School)",
        text: "Organization with extensive experience in e-learning and digital content development. It contributes to the project by providing technological solutions and expertise in cultural heritage digitization."
      }
    },
    slide03: {
      title: "How to Use AI for Cultural Heritage Exploitation",
      text: [
        "AI enables transforming historical data into living experiences.",
        "From creating historical chatbots to virtual tours with augmented reality, the possibilities are multiple.",
        "Practical examples:"
      ],
      bullets: [
        "Historical chatbots: allow visitors to converse with characters like \"The Warrior of the Iberian Stele\"",
        "Analysis of archives and old photographs: AI can recognize places and link them to oral stories.",
        "Tours with QR codes: users scan a point in the municipality and access an avatar that narrates the history of the place."
      ],
      chatbot: {
        name: "The Iberian Stele Warrior",
        status: "● Online",
        greeting: "Hail! I am the spirit of the Iberian warrior who inhabited these lands more than 2,000 years ago. What would you like to know about our time?",
        q1: "What was life like in Altea 2,000 years ago?",
        a1: "In those times, these lands were rich in Iberian tradition. We cultivated olive trees and vines, traded with the peoples of the Mediterranean, and honored our gods with rituals that are barely remembered today. The stele bearing my image was carved by wise hands so that my memory would endure.",
        q2: "What was the Iberian Stele?",
        a2: "The stele is a carved stone bearing my figure, a symbol of honor and power among the Iberians. It was customary to erect these slabs in strategic points of the territory to mark lineages, victories, or lands. Mine was found in these Mediterranean hills, testimony to a civilization that loved beauty and strength equally.",
        q3: "What legacy did the Iberians leave in Altea?",
        a3: "The Iberian legacy in these lands is deep: from the layout of the first roads to the agricultural techniques later adopted by the Romans. Place names, some festive rituals, and devotion to the land itself are still echoes of our presence. Memory does not die as long as there are those who seek it.",
        placeholder: "Write your question..."
      }
    },
    slide04: {
      title: "Replicable Methodology: Step by Step",
      steps: [
        {
          title: "Identification of Local Heritage",
          bullets: [
            "Gather stories, legends, and relevant characters.",
            "Involve schools, associations, and elders from the area."
          ]
        },
        {
          title: "Collection and Curation of Cultural Data",
          bullets: [
            "Classify texts, photos, recordings, and oral testimonies."
          ]
        },
        {
          title: "Digitization and Structuring of Information",
          bullets: [
            "Convert contents to digital formats (text, image, audio)."
          ]
        },
        {
          title: "Training of AI Models",
          bullets: [
            "Use accessible tools (ChatGPT, DeepAI, Gemini, Claude)."
          ]
        },
        {
          title: "Design of the Interactive Experience",
          bullets: [
            "Define the avatar's personality, tone, and ethical limits."
          ]
        },
        {
          title: "Local Installation and Dissemination",
          bullets: [
            "Implement routes with QR or interactive spaces."
          ]
        },
        {
          title: "Evaluation and Sustainability",
          bullets: [
            "Measure educational, tourist, and social impact."
          ]
        }
      ]
    },
    slide05: {
      title: "Improving Adults' Digital Skills",
      text: [
        "The Living History project promotes practical AI learning among adults and teachers.",
        "Through training workshops, it teaches how to train chatbots and manage cultural data.",
        "The goal is to bring technology closer to those who normally do not use it, reinforcing citizens' digital confidence.",
        "Local trainings conducted in Altea with IES Bellaguarda are an example of how AI can be integrated into teaching, tourism, and local culture."
      ]
    },
    slide06: {
      title: "Adapting Historical Content to AI Training",
      text: [
        "AI does not replace history: it amplifies it.",
        "For AI to learn, it needs structured materials:",
        "Teachers can use these tools for students to participate in creating historical avatars, strengthening their understanding of local history and digital critical thinking."
      ],
      bullets: [
        "Clear texts, chronologies, descriptions, and anecdotes.",
        "Inclusive and neutral language.",
        "Various formats: text, image, voice."
      ]
    },
    slide07: {
      title: "Transfer to Other Contexts and Municipalities",
      text: [
        "The Living History approach is fully transferable:",
        "The secret is to adapt the scale: a small municipality can start with a single avatar or interactive route and grow progressively."
      ],
      bullets: [
        "It can be applied in rural areas to combat depopulation.",
        "In tourist cities, it can diversify cultural offerings.",
        "In schools, it fosters digital and heritage education."
      ]
    },
    slide08: {
      title: "Impact and Sustainability",
      text: [
        "The project's success is measured both in social participation and the real use of the created tools.",
        "Some suggested indicators:"
      ],
      bullets: [
        "No. of digitized stories or places.",
        "Participants in workshops and local sessions.",
        "Visits to QR or interaction with avatars.",
        "New collaborations generated."
      ]
    },
    slide09: {
      title: "Practical Tips to Start Your Own \"Living History\"",
      bullets: [
        "Start with a small pilot: one character, one story, one neighborhood.",
        "Create a local support group (educational center + technicians + associations).",
        "Use accessible tools, avoid costly developments.",
        "Document everything: testimonies, photos, interviews.",
        "Celebrate results with the community: exhibition, walk, public event."
      ],
      final_popup: {
        title: "🎉 Ready to launch your own Living History!",
        text: "You have completed all the steps. Now it's time to begin.",
        button: "Continue →"
      }
    },
    slide10: {
      title: "Resources and Annexes",
      resources: [
        "Link to European cultural databases (Europeana, Wikimedia Commons).",
        "Link to the Erasmus+ programme: https://erasmus-plus.ec.europa.eu"
      ],
      footer_quote: "Every local story can be transformed into a living dialogue between past and future. Artificial intelligence gives it voice; memory, the soul."
    },
    ui: {
      disclaimer: "Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them."
    }
  }
};
