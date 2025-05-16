import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../styles/contentStyles';

const topicos = [
  {
    titulo: '🏥 SUS (Sistema Único de Saúde)',
    descricao:
      'Sistema público, universal e gratuito que garante acesso integral à saúde para todos os brasileiros.',
    fonte: 'https://www.gov.br/saude/pt-br',
  },
  {
    titulo: '💉 Vacinação',
    descricao:
      'Direito à vacinação gratuita contra diversas doenças, conforme o calendário nacional de imunização.',
    fonte: 'https://www.gov.br/saude/pt-br/assuntos/vacinacao',
  },
  {
    titulo: '🩺 Atendimento de Urgência e Emergência',
    descricao:
      'Garantia de atendimento imediato para casos graves e emergenciais, sem cobrança de taxa.',
    fonte: 'https://www.saude.gov.br/atendimento-de-urgencia',
  },
  {
    titulo: '👩‍⚕️ Profissionais de Saúde',
    descricao:
      'Direito ao atendimento por profissionais habilitados e capacitados dentro do SUS e clínicas conveniadas.',
    fonte: 'https://www.gov.br/saude/pt-br/assuntos/profissionais',
  },
  {
    titulo: '🧪 Exames e Diagnósticos',
    descricao:
      'Acesso gratuito a exames laboratoriais, de imagem e outros procedimentos diagnósticos quando indicados.',
    fonte: 'https://www.gov.br/saude/pt-br/assuntos/exames',
  },
  {
    titulo: '🏥 Internação Hospitalar',
    descricao:
      'Direito à internação hospitalar quando necessária, com acompanhamento e tratamentos adequados.',
    fonte: 'https://www.gov.br/saude/pt-br/assuntos/internacao',
  },
  {
    titulo: '🧬 Saúde Mental',
    descricao:
      'Apoio e tratamento para questões de saúde mental, incluindo psicoterapia e acompanhamento especializado.',
    fonte: 'https://www.gov.br/saude/pt-br/assuntos/saude-mental',
  },
  {
    titulo: '🚼 Saúde da Mulher',
    descricao:
      'Direito a atendimento pré-natal, parto humanizado, planejamento familiar e prevenção de doenças.',
    fonte: 'https://www.gov.br/saude/pt-br/assuntos/saude-da-mulher',
  },
  {
    titulo: '👶 Saúde da Criança',
    descricao:
      'Programas de acompanhamento do crescimento, vacinação, nutrição e prevenção de doenças infantis.',
    fonte: 'https://www.gov.br/saude/pt-br/assuntos/saude-da-crianca',
  },
  {
    titulo: '💊 Medicamentos',
    descricao:
      'Acesso gratuito a medicamentos essenciais e tratamentos conforme protocolos do SUS.',
    fonte: 'https://www.gov.br/saude/pt-br/assuntos/medicamentos',
  },
];

const SaudeScreen = () => {
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
        <Text style={styles.tituloPagina}>Direitos Relacionados à Saúde</Text>
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

export default SaudeScreen;
