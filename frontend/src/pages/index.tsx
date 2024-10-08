import { Card, Container } from "@chakra-ui/react"
import { type NextPage } from "next"
import Head from "next/head"
import AppHeader from "components/global/AppHeader"
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react"
import SalesPanel from "components/entities/sales/SalesPanel"
import ClientsPanel from "components/entities/clients/ClientsPanel"
import ProductsPanel from "components/entities/products/ProductsPanel"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Proyecto</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container marginTop={8}>
        <AppHeader />
        <Card p={4}>
          <Tabs variant="enclosed" colorScheme="blue" isLazy>
            <TabList>
              <Tab>💵 Ventas</Tab>
              <Tab>🤝 Clientes</Tab>
              <Tab>🛒 Productos</Tab>
            </TabList>

            <TabPanels>
              <SalesPanel />
              <ClientsPanel />
              <ProductsPanel />
            </TabPanels>
          </Tabs>
        </Card>
      </Container>
    </>
  )
}

export default Home
