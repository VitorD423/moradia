import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';
import styles from '../../styles/VagaStyles';

const vagasAprendizInfo = [
  {
    titulo: 'Agentes de Integração e Formação Profissional',
    itens: [
      {
        nome: 'CIEE Rio (Centro de Integração Empresa-Escola)',
        link: 'https://portal.ciee.org.br',
        descricao: 'Maior agente de integração do estado. Oferece programas completos de Jovem Aprendiz com capacitação e vagas em empresas parceiras.',
      },
      {
        nome: 'Fundação Mudes',
        link: 'https://www.mudes.org.br',
        descricao: 'ONG carioca que oferece vagas para aprendiz, estágio e inclusão, com forte rede de empresas conveniadas.',
      },
      {
        nome: 'Espro (Ensino Social Profissionalizante)',
        link: 'https://www.espro.org.br',
        descricao: 'Especializada na formação e inserção de jovens de 14 a 24 anos em programas de aprendizagem.',
      },
      {
        nome: 'ISBET (Instituto Brasileiro Pró-Educação, Trabalho e Desenvolvimento)',
        link: 'https://www.isbet.org.br',
        descricao: 'Tem unidades no RJ e promove inclusão de jovens no mercado por meio da aprendizagem profissional.',
      },
      {
        nome: 'Nube (Núcleo Brasileiro de Estágios)',
        link: 'https://www.nube.com.br',
        descricao: 'Além de estágio, também oferece oportunidades de Jovem Aprendiz em empresas do RJ.',
      },
      {
        nome: 'ABRE Rio (Associação Brasileira de Estágios)',
        link: 'https://www.portalabre.com.br',
        descricao: 'Atua com vagas de estágio e aprendizagem para estudantes, com presença no estado do Rio.',
      },
      {
        nome: 'SENAC RJ',
        link: 'https://www.rj.senac.br',
        descricao: 'Oferece cursos de aprendizagem com encaminhamento para vagas em empresas do comércio e turismo.',
      },
      {
        nome: 'SENAI Rio',
        link: 'https://firjan.com.br/senai',
        descricao: 'Desenvolve programas de aprendizagem industrial com parcerias em empresas do setor produtivo.',
      },
    ],
  },
  {
    titulo: 'Plataformas de Vagas Online',
    itens: [
      {
        nome: 'Vagas.com.br',
        link: 'https://www.vagas.com.br',
        descricao: 'Plataforma com filtro por “Jovem Aprendiz” e localidade. Vagas de empresas como Ambev, Bradesco e Americanas.',
      },
      {
        nome: 'InfoJobs',
        link: 'https://www.infojobs.com.br',
        descricao: 'Reúne centenas de vagas para aprendizes no RJ. Possui filtros por local e perfil da vaga.',
      },
      {
        nome: 'Gupy',
        link: 'https://portal.gupy.io',
        descricao: 'Empresas utilizam a plataforma para divulgar seus programas de Jovem Aprendiz. Filtros por área e localização disponíveis.',
      },
      {
        nome: 'Indeed Brasil',
        link: 'https://br.indeed.com',
        descricao: 'Agregador de vagas com diversas oportunidades de aprendizagem. Use filtros para refinar sua busca.',
      },
      {
        nome: 'LinkedIn',
        link: 'https://www.linkedin.com/jobs',
        descricao: 'Rede social profissional com vagas em tempo real. Permite seguir empresas e configurar alertas por local e função.',
      },
      {
        nome: 'Jovem Aprendiz Brasil',
        link: 'https://www.jovemaprendizbrasil.com.br',
        descricao: 'Plataforma especializada com listagens por estado e orientações para primeiro emprego.',
      },
    ],
  },
  {
    titulo: 'Programas Próprios e Setores Públicos',
    itens: [
      {
        nome: 'Sites de Empresas com Programas Próprios',
        descricao: "Ex.: Ambev, Coca-Cola, Bradesco, Itaú, Lojas Americanas, Light, Enel. Verifique a seção 'Trabalhe Conosco' no site oficial dessas empresas.",
      },
      {
        nome: 'Prefeitura do Rio de Janeiro',
        link: 'https://www.rio.rj.gov.br',
        descricao: 'Eventualmente publica editais ou programas voltados para inclusão de jovens no serviço público.',
      },
      {
        nome: 'Governo do Estado do Rio de Janeiro',
        link: 'https://www.rj.gov.br',
        descricao: 'Acompanhe as oportunidades divulgadas pelos órgãos estaduais em programas voltados ao primeiro emprego.',
      },
    ],
  },
];

export default function VagasAprendizScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Onde Procurar Vaga de Jovem Aprendiz</Text>

      {vagasAprendizInfo.map((categoria, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.subTitle}>{categoria.titulo}</Text>
          {categoria.itens.map((item, idx) => (
            <View key={idx} style={styles.itemContainer}>
              <TouchableOpacity onPress={() => item.link && Linking.openURL(item.link)}>
                <Text style={[styles.itemName, item.link && styles.link]}>
                  {item.nome}
                </Text>
              </TouchableOpacity>
              {item.descricao && <Text style={styles.itemDescription}>{item.descricao}</Text>}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
