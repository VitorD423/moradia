import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../styles/contentStyles';

const topicos = [
  {
    titulo: '📌 DIREITOS DO TRABALHADOR (CLT)',
    descricao:
      `• Carteira assinada (CLT)\n• Salário mínimo\n• Jornada de trabalho (máx. 8h/dia ou 44h/semana)\n• Descanso semanal remunerado\n• 13º salário\n• Férias + 1/3\n• FGTS (Fundo de Garantia por Tempo de Serviço)\n• Licença-maternidade e paternidade\n• Aviso prévio\n• Seguro-desemprego\n• Adicional noturno, insalubridade e periculosidade\n• Proteção contra despedida arbitrária`,
    fonte: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
  },
  {
    titulo: '👨‍💼 ESTAGIÁRIO (Lei nº 11.788/2008)',
    descricao:
      `• Carga horária: máx. 6h/dia ou 30h/semana\n• Bolsa-auxílio (obrigatória se não for estágio obrigatório)\n• Auxílio-transporte\n• Recesso remunerado: 30 dias após 12 meses (ou proporcional)\n• Seguro contra acidentes pessoais\n• Acompanhamento por supervisor\n• Termo de compromisso assinado entre estudante, empresa e instituição de ensino\n❌ Não tem: FGTS, 13º, aviso prévio, seguro-desemprego, INSS`,
    fonte: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11788.htm',
  },
  {
    titulo: '👨‍🎓 JOVEM APRENDIZ (Lei nº 10.097/2000)',
    descricao:
      `• Contrato de até 2 anos\n• Jornada: até 6h/dia (ou 8h se já concluiu o ensino médio)\n• Salário proporcional ao mínimo/hora\n• 13º salário\n• Férias com 1/3 (coincidindo com férias escolares)\n• FGTS (alíquota de 2%)\n• Vale-transporte\n• Curso de capacitação obrigatório\n• Assinatura na carteira de trabalho\n• Recolhimento do INSS\n• Direito ao aviso prévio e multa de 20% do FGTS em caso de demissão sem justa causa`,
    fonte: 'https://www.planalto.gov.br/ccivil_03/leis/l10097.htm',
  },
  {
    titulo: '❌ DEMISSÃO – TRABALHADOR CLT',
    descricao:
      `🔹 Sem Justa Causa\n• Saldo de salário\n• Aviso prévio (trabalhado ou indenizado)\n• Férias vencidas + 1/3\n• Férias proporcionais + 1/3\n• 13º salário proporcional\n• Saque do FGTS\n• Multa de 40% sobre o FGTS\n• Seguro-desemprego\n\n🔸 Por Justa Causa\n• Saldo de salário\n• Férias vencidas + 1/3\n❌ Sem férias proporcionais, 13º, aviso prévio, multa ou seguro\n\n🔸 Pedido de Demissão\n• Saldo de salário\n• Férias vencidas + 1/3\n• Férias proporcionais + 1/3\n• 13º proporcional\n❌ Sem saque do FGTS, multa ou seguro-desemprego`,
    fonte: 'https://www.gov.br/pt-br/servicos/requerer-o-seguro-desemprego',
  },
];

const TrabalhoScreen = () => {
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
        <Text style={styles.tituloPagina}>Direitos Relacionados ao Trabalho</Text>
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

export default TrabalhoScreen;
