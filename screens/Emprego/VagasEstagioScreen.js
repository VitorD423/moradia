import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';
import styles from '../../styles/VagaStyles';

const vagasEstagioInfo = [
  {
    titulo: 'Agentes de Integração e Portais Especializados',
    itens: [
      {
        nome: 'CIEE Rio (Centro de Integração Empresa-Escola)',
        link: 'https://portal.ciee.org.br',
        descricao: 'Maior agente de integração do estado. Cadastre-se na “Vitrine de Vagas” para filtrar por área e local.',
      },
      {
        nome: 'Fundação Mudes',
        link: 'https://www.mudes.org.br',
        descricao: 'ONG carioca com forte carteira de empresas. Oferece vagas de estágio, jovem aprendiz e inclusão.',
      },
      {
        nome: 'IEL / Firjan RJ (Instituto Euvaldo Lodi)',
        link: 'https://www.firjan.com.br',
        descricao: 'Publica vagas de estágio em empresas industriais e de serviços no estado.',
      },
      {
        nome: 'Nube (Núcleo Brasileiro de Estágios)',
        link: 'https://www.nube.com.br',
        descricao: 'Plataforma nacional com centenas de vagas. Filtros por cidade, área e escolaridade.',
      },
      {
        nome: 'ABRE Rio (Associação Brasileira de Estágios)',
        link: 'https://www.portalabre.com.br',
        descricao: 'Portal 100% online e gratuito para estudantes. Oferece oportunidades em diversas regiões.',
      },
      {
        nome: 'Companhia de Estágios',
        link: 'https://www.ciadeestagios.com.br',
        descricao: 'Especializada em programas de estágio e trainee em empresas de pequeno a grande porte.',
      },
    ],
  },
  {
    titulo: 'Plataformas de Vagas e Recrutamento',
    itens: [
      {
        nome: 'Vagas.com.br',
        link: 'https://www.vagas.com.br',
        descricao: 'Grande portal de empregos com seção exclusiva para “Estágio no Rio de Janeiro”.',
      },
      {
        nome: 'InfoJobs',
        link: 'https://www.infojobs.com.br',
        descricao: 'Plataforma com centenas de vagas, com filtros por área e localidade.',
      },
      {
        nome: 'Gupy',
        link: 'https://portal.gupy.io',
        descricao: 'Utilizada por grandes empresas para seus processos seletivos. Use os filtros "Estágio" e "RJ".',
      },
      {
        nome: 'Indeed Brasil',
        link: 'https://br.indeed.com',
        descricao: 'Agregador de vagas global. Pesquise por “Estágio” + “Rio de Janeiro”.',
      },
      {
        nome: 'LinkedIn',
        link: 'https://www.linkedin.com/jobs',
        descricao: 'Rede social profissional com vagas atualizadas. Siga empresas e configure alertas de estágio.',
      },
    ],
  },
  {
    titulo: 'Programas Oficiais e Institucionais',
    itens: [
      {
        nome: 'Programa de Estágios da Prefeitura do Rio',
        link: 'https://www.rio.rj.gov.br',
        descricao: 'Processos seletivos para órgãos públicos municipais (ex.: Saúde, Engenharia, PGM).',
      },
    ],
  },
  {
    titulo: 'Portais de Carreira de Universidades',
    itens: [
      {
        nome: 'Universidades como UFRJ, UERJ, UFF, Estácio, PUC-Rio',
        descricao: 'Muitas universidades têm seus próprios sistemas de vagas e convênios com empresas.',
      },
    ],
  },
  {
    titulo: 'Sites de Empresas com Programas Próprios',
    itens: [
      {
        nome: 'Exemplos: Petrobras, Vale, Ambev, Globo, Bradesco',
        descricao: 'Acesse a área “Trabalhe Conosco” ou “Programa de Estágio” nos sites oficiais das empresas.',
      },
    ],
  },
  {
    titulo: 'Órgãos Públicos e Tribunais',
    itens: [
      {
        nome: 'Exemplos: TRT1, TRF2, TJ-RJ, MP-RJ',
        descricao: 'Acompanhe os editais nos sites oficiais desses órgãos, que oferecem vagas de estágio regularmente.',
      },
    ],
  },
];

export default function VagasEstagioScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Onde Procurar Vaga de Estágio</Text>

      {vagasEstagioInfo.map((categoria, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.subTitle}>{categoria.titulo}</Text>
          {categoria.itens.map((item, i) => (
            <View key={i} style={styles.itemContainer}>
              <TouchableOpacity onPress={() => Linking.openURL(item.link)} disabled={!item.link}>
                <Text style={[styles.itemName, item.link && styles.link]}>{item.nome}</Text>
              </TouchableOpacity>
              <Text style={styles.itemDescription}>{item.descricao}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
