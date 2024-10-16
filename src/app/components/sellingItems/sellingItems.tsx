import React from "react";
import { SellingItemsContainer, SellingItemsTitle, ItemGrid, ItemCard, Wave, ItemImage, ItemName, ItemPrice, ItemDiscount } from "./styles";


// Itens agrupados por categoria
const allItems = {
    pranchas: [
      {
        id: 1,
        name: "Prancha Neptuno",
        price: "R$ 2220,00",
        discount: "20% OFF",
        image: "https://fmsurf.com.br/wp-content/uploads/2021/10/site_FM-fish-07a-scaled.jpg",
      },
      {
        id: 2,
        name: "Prancha Tsunami",
        price: "R$ 2330,00",
        discount: "15% OFF",
        image: "https://fmsurf.com.br/wp-content/uploads/2021/10/site_FM-pranchinha-09a-1536x1536.jpg",
      },
      {
        id: 3,
        name: "Prancha Wavolution",
        price: "R$ 1950,00",
        discount: "5% OFF",
        image: "https://fmsurf.com.br/wp-content/uploads/2021/09/site_FM-pranchinha-05a-1536x1536.jpg",
      },
      {
        id: 4,
        name: "Prancha Fluorita",
        price: "R$ 1800,00",
        discount: "30% OFF",
        image: "https://fmsurf.com.br/wp-content/uploads/2021/10/site_FM-evolution-08a-1536x1536.jpg",
      },
      {
        id: 5,
        name: "Prancha Scorch Sting",
        price: "R$ 2330,00",
        discount: "15% OFF",
        image: "https://static.wixstatic.com/media/24524b_99632313eddb481d9784edd4911c0514~mv2.jpg/v1/fill/w_325,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/24524b_99632313eddb481d9784edd4911c0514~mv2.jpg",
      },
      {
        id: 6,
        name: "Prancha MixTape Sym",
        price: "R$ 1950,00",
        discount: "5% OFF",
        image: "https://static.wixstatic.com/media/24524b_e7901902509c4c20a08c8075ab30dfc9~mv2.jpg/v1/fill/w_325,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/24524b_e7901902509c4c20a08c8075ab30dfc9~mv2.jpg",
      },
      {
        id: 7,
        name: "Prancha Marbella",
        price: "R$ 2220,00",
        discount: "20% OFF",
        image: "https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-1100,h-1594,c-at_max,pr-true,q-80/a150-ofyzsg/pv/a5/7d/92/e7039347fefeae95c9c24a0483/prancha-surf-marbella-surfboards-black-market-5-8-carbon-sling-eps-epoxy-27-4-litros-large-1.jpg",
      },
      {
        id: 8,
        name: "Prancha Noronha",
        price: "R$ 2330,00",
        discount: "15% OFF",
        image: "https://fmsurf.com.br/wp-content/uploads/2021/10/site_FM-pranchinha-13a-scaled.jpg",
      },
      {
        id: 9,
        name: "Prancha SpitFire",
        price: "R$ 1950,00",
        discount: "5% OFF",
        image: "https://static.wixstatic.com/media/24524b_9d0798d26eb140b3b563cf7cb75e4d0c~mv2.jpg/v1/fill/w_325,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/24524b_9d0798d26eb140b3b563cf7cb75e4d0c~mv2.jpg",
      },
    ],
    trajes: [
      {
        id: 10,
        name: "Traje Long Mormaii",
        price: "R$ 999,00",
        discount: "25% OFF",
        image: "https://fmsurf.com.br/wp-content/uploads/2020/07/SU001M32EXL2302_PRETO_1.jpg",
      },
      {
        id: 11,
        name: "Traje Diva Mormaii",
        price: "R$ 1480,00",
        discount: "35% OFF",
        image: "https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-1100,h-1594,c-at_max,pr-true,q-80/a150-ofyzsg/pv/e6/ec/bd/7a886cf734765c9e91c6518bd6/long-john-feminino-mormaii-diva-pro-1-mm-large-3.jpg",
      },
      {
        id: 12,
        name: "Traje Long Mormaii",
        price: "R$ 999,00",
        discount: "25% OFF",
        image: "https://fmsurf.com.br/wp-content/uploads/2020/07/SU001M32EXL2302_PRETO_1.jpg",
      },
      {
        id: 13,
        name: "Traje Diva Mormaii",
        price: "R$ 1480,00",
        discount: "35% OFF",
        image: "https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-1100,h-1594,c-at_max,pr-true,q-80/a150-ofyzsg/pv/e6/ec/bd/7a886cf734765c9e91c6518bd6/long-john-feminino-mormaii-diva-pro-1-mm-large-3.jpg",
      },
      {
        id: 14,
        name: "Traje Long Mormaii",
        price: "R$ 999,00",
        discount: "25% OFF",
        image: "https://fmsurf.com.br/wp-content/uploads/2020/07/SU001M32EXL2302_PRETO_1.jpg",
      },
      {
        id: 15,
        name: "Traje Diva Mormaii",
        price: "R$ 1480,00",
        discount: "35% OFF",
        image: "https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-1100,h-1594,c-at_max,pr-true,q-80/a150-ofyzsg/pv/e6/ec/bd/7a886cf734765c9e91c6518bd6/long-john-feminino-mormaii-diva-pro-1-mm-large-3.jpg",
      },
      {
        id: 16,
        name: "Traje Long Mormaii",
        price: "R$ 999,00",
        discount: "25% OFF",
        image: "https://fmsurf.com.br/wp-content/uploads/2020/07/SU001M32EXL2302_PRETO_1.jpg",
      },
    ],
    acessorios: [
      {
        id: 17,
        name: "Parafina Fu Wax",
        price: "R$ 20,00",
        discount: "10% OFF",
        image: "https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-1100,h-1594,c-at_max,pr-true,q-80/a150-ofyzsg/pv/40/37/25/46283938889b522e11e3455f86/base-de-parafina-fu-wax-base-coat-75g-1-large-1.jpeg",
      },
      {
        id: 18,
        name: "Quilha FS4 QUAD",
        price: "R$ 450,00",
        discount: "40% OFF",
        image: "https://fmsurf.com.br/wp-content/uploads/2018/06/Quilha-7.jpg",
      },
      {
        id: 19,
        name: "Quilha FS4 OCEAN",
        price: "R$ 450,00",
        discount: "40%",
        image: "https://fmsurf.com.br/wp-content/uploads/2018/06/Quilha-9.jpg",
      },
      {
        id: 20,
        name: "Quilha FS4 ICE",
        price: "R$ 450,00",
        discount: "40%",
        image: "https://fmsurf.com.br/wp-content/uploads/2018/02/Quilha-08.jpg",
      },
      {
        id: 21,
        name: "Quilha FS4 QUAD",
        price: "R$ 450,00",
        discount: "40% OFF",
        image: "https://fmsurf.com.br/wp-content/uploads/2018/06/Quilha-7.jpg",
      },
      {
        id: 22,
        name: "Quilha FS4 QUADRED",
        price: "R$ 450,00",
        discount: "0%",
        image: "https://fmsurf.com.br/wp-content/uploads/2018/06/Quilha-7.jpg",
      },
      {
        id: 23,
        name: "Quilha FS4 QUADRED",
        price: "R$ 450,00",
        discount: "0%",
        image: "https://fmsurf.com.br/wp-content/uploads/2018/06/Quilha-7.jpg",
      },
      {
        id: 24,
        name: "Quilha FS4 QUADRED",
        price: "R$ 450,00",
        discount: "0%",
        image: "https://fmsurf.com.br/wp-content/uploads/2018/06/Quilha-7.jpg",
      },
    ],
  };

export const SellingItems = () => {
  return (
    <SellingItemsContainer>
      <SellingItemsTitle>Pranchas</SellingItemsTitle>

      <ItemGrid>
        {allItems.pranchas.map((item) => (
          <ItemCard key={item.id}>
            {/* Adicionando a animação de onda ao fundo do cartão */}
            <Wave />
            <ItemImage src={item.image} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}</ItemPrice>
            <ItemDiscount>{item.discount}</ItemDiscount>
          </ItemCard>
        ))}
      </ItemGrid>

      {/* Seção de Trajes */}
      <SellingItemsTitle>Trajes</SellingItemsTitle>
      <ItemGrid>
        {allItems.trajes.map((item) => (
          <ItemCard key={item.id}>
            {/* Adicionando a animação de onda ao fundo do cartão */}
            <Wave />
            <ItemImage src={item.image} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}</ItemPrice>
            <ItemDiscount>{item.discount}</ItemDiscount>
          </ItemCard>
        ))}
      </ItemGrid>

      {/* Seção de Acessórios */}
      <SellingItemsTitle>Acessórios</SellingItemsTitle>
      <ItemGrid>
        {allItems.acessorios.map((item) => (
          <ItemCard key={item.id}>
            {/* Adicionando a animação de onda ao fundo do cartão */}
            <Wave />
            <ItemImage src={item.image} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}</ItemPrice>
            <ItemDiscount>{item.discount}</ItemDiscount>
          </ItemCard>
        ))}
      </ItemGrid>
    </SellingItemsContainer>
  );
};

export default SellingItems;
