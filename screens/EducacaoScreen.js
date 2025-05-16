import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../styles/contentStyles';

const topicos = [
  {
    titulo: '📚 Direito à Educação Básica',
    descricao:
      'A educação básica é um direito garantido pela Constituição, abrangendo a educação infantil, ensino fundamental e médio, oferecida gratuitamente pelo Estado.',
    fonte: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
  },
  {
    titulo: '🎓 Ensino Técnico e Profissionalizante',
    descricao:
      'O Estado deve promover o acesso a cursos técnicos e profissionalizantes para ampliar a qualificação da população.',
    fonte: 'https://www.gov.br/pt-br/servicos/inscricao-em-curso-tecnico',
  },
  {
    titulo: '📖 Educação Inclusiva',
    descricao:
      'É direito dos estudantes com deficiência, transtornos globais do desenvolvimento e altas habilidades frequentar a escola regular.',
    fonte: 'http://portal.mec.gov.br/arquivos/pdf/lei_pessoas_deficiencia.pdf',
  },
  {
    titulo: '💡 Programas de Bolsas de Estudo',
    descricao:
      'Existem diversos programas públicos e privados que oferecem bolsas para alunos de baixa renda em escolas e universidades.',
    fonte: 'https://www.fies.mec.gov.br/',
  },
  {
    titulo: '📅 Ensino em Tempo Integral',
    descricao:
      'O Estado deve garantir a ampliação da oferta do ensino em tempo integral para promover melhor aprendizagem e desenvolvimento.',
    fonte: 'https://www.gov.br/pt-br/servicos/ensino-integral',
  },
  {
    titulo: '🏫 Material Escolar Gratuito',
    descricao:
      'O fornecimento gratuito de material escolar é uma política pública para garantir o acesso igualitário à educação.',
    fonte: 'https://www.gov.br/pt-br/servicos/fornecimento-de-material-escolar',
  },
  {
    titulo: '🌐 Acesso à Internet nas Escolas',
    descricao:
      'As escolas públicas devem ter acesso à internet de qualidade para auxiliar no processo educacional e inclusão digital.',
    fonte: 'https://www.gov.br/pt-br/servicos/internet-nas-escolas',
  },
  {
    titulo: '👩‍🏫 Valorização dos Profissionais da Educação',
    descricao:
      'A política pública inclui formação continuada, melhores salários e condições de trabalho para professores.',
    fonte: 'https://www.gov.br/pt-br/servicos/valorizacao-dos-profissionais-da-educacao',
  },
  {
    titulo: '📊 Avaliação da Educação',
    descricao:
      'Programas como o SAEB avaliam a qualidade da educação básica no país, garantindo transparência e melhorias.',
    fonte: 'http://portal.inep.gov.br/web/guest/saeb',
  },
  {
    titulo: '⚖️ Direito à Educação Superior',
    descricao:
      'O acesso à educação superior pública e gratuita é garantido, bem como programas de financiamento e bolsas.',
    fonte: 'https://www.gov.br/pt-br/servicos/financiamento-estudantil-fies',
  },
];

const EducacaoScreen = () => {
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
        <Text style={styles.tituloPagina}>Direitos Relacionados à Educação</Text>
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

export default EducacaoScreen;
