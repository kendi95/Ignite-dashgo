import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};

const series = [
  { name: "Dado 1", data: [31, 120, 10, 28, 51, 18, 109] }
];

export default function Dashboard() {
  return (
    <Flex flexDirection="column" height="100vh">
      <Header />

      <Flex 
        width="100%" 
        marginY="6" 
        maxWidth={1280} 
        marginX="auto" 
        paddingX="6"
      >
        <Sidebar />

        <SimpleGrid 
          flex="1" 
          gap="4" 
          minChildWidth="320px" 
          alignItems="flex-start"
        >
          <Box
            padding={['6', '8']}
            background="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">Inscritos da semana</Text>
            <Chart 
              type="area" 
              height={160}
              series={series}
              options={options}
            />
          </Box>

          <Box
            padding={['6', '8']}
            background="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">Taxa de abertura</Text>
            <Chart 
              type="area" 
              height={160}
              series={series}
              options={options}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}