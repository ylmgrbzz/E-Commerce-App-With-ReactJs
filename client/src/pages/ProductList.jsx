import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Elbiseler</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrelenmiş Ürünler:</FilterText>
          <Select>
            <Option disabled selected>
              Renk
            </Option>
            <Option>Beyaz</Option>
            <Option>Siyah</Option>
            <Option>Kırmızı</Option>
            <Option>Mavi</Option>
            <Option>Sarı</Option>
            <Option>Yeşil</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Beden
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ürün Sıralanması:</FilterText>
          <Select>
            <Option selected>En Yeniler</Option>
            <Option>Fiyata Göre Azalan</Option>
            <Option>Fiyata Göre Artan</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
