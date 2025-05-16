import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../styles/contentStyles';

const topicos = [
  {
    titulo: '🏠 1. Direito à Moradia Digna',
    descricao:
      'A moradia é um direito social garantido pelo Artigo 6º da Constituição Federal de 1988, essencial para assegurar a dignidade humana.',
    fonte: 'https://www.jusbrasil.com.br/topicos/10641309/artigo-6-da-constituicao-federal-de-1988',
  },
  {
    titulo: '🏡 2. Programa Minha Casa, Minha Vida',
    descricao:
      'Iniciativa do governo federal que facilita o acesso à casa própria para famílias de baixa renda, oferecendo subsídios e financiamentos com condições especiais.',
    fonte: 'https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/habitacao/programa-minha-casa-minha-vida',
  },
  {
    titulo: '📜 3. Regularização Fundiária',
    descricao:
      'A Lei nº 13.465/2017 estabelece procedimentos para regularizar áreas urbanas e rurais ocupadas irregularmente, garantindo segurança jurídica aos ocupantes.',
    fonte: 'https://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2017/Lei/L13465.htm',
  },
  {
    titulo: '💰 4. Aluguel Social',
    descricao:
      'Benefício temporário oferecido por governos estaduais e municipais para auxiliar famílias em situação de vulnerabilidade a custear o aluguel.',
    fonte: 'https://moneycredit.com.br/programa-de-aluguel-social-do-governo-do-brasil-entenda-como-funciona/',
  },
  {
    titulo: '⚖️ 5. Despejo e Reintegração de Posse',
    descricao:
      'Ações legais utilizadas para retomar a posse de imóveis, cada uma com procedimentos específicos conforme a situação do ocupante.',
    fonte: 'https://www.ivanildogouveia.adv.br/post/despejo-e-reintegracao-de-posse',
  },
  {
    titulo: '🚰 6. Acesso à Água Potável e Saneamento',
    descricao:
      'O direito ao acesso à água potável e ao saneamento básico está ligado diretamente à garantia de um ambiente de moradia saudável.',
    fonte: 'https://www.gov.br/mdr/pt-br/assuntos/urbanizacao/saneamento',
  },
  {
    titulo: '🏘️ 7. Direito ao Alojamento Temporário',
    descricao:
      'O direito ao alojamento temporário busca amparar pessoas em situação de vulnerabilidade social, fornecendo um local provisório enquanto aguardam uma solução definitiva.',
    fonte: 'https://www.uol.com.br/mais/olhar-de-futuro/2020/04/22/o-direito-ao-alojamento-temporal.htm',
  },
  {
    titulo: '♿ 8. Moradia para Pessoas com Deficiência',
    descricao:
      'A legislação brasileira prevê a adaptação de moradias para pessoas com deficiência, garantindo acessibilidade e condições de habitação adequadas a essas pessoas.',
    fonte: 'http://www.cidades.gov.br',
  },
  {
    titulo: '🌾 9. Apoio à Habitação Rural',
    descricao:
      'Para as famílias que vivem em áreas rurais, o Estado oferece programas de apoio à construção e melhoria das moradias rurais.',
    fonte: 'https://www.mdr.gov.br/',
  },
  {
    titulo: '🚶‍♂️ 10. Direitos das Pessoas em Situação de Rua',
    descricao:
      'Além de garantir acesso à moradia, o sistema jurídico brasileiro assegura direitos específicos para pessoas em situação de rua, como o direito à alimentação, saúde e moradia.',
    fonte: 'https://www.senado.leg.br/',
  },
];

const MoradiaScreen = () => {
  const insets = useSafeAreaInsets();

  const handleOpenLink = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert('Não foi possível abrir o link: ' + url);
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      >
        <Text style={styles.tituloPagina}>Direitos Relacionados à Moradia</Text>
        {topicos.map((item, index) => (
          <View
            key={index}
            style={[
              styles.card,
              index === topicos.length - 1 && styles.lastCard,
            ]}
          >
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 }}>
              <Text style={styles.fonte}>Fonte: </Text>
              <TouchableOpacity onPress={() => handleOpenLink(item.fonte)}>
                <Text style={styles.fonteLink}>{item.fonte}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoradiaScreen;
