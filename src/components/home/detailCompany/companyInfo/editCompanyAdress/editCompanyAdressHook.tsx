import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation} from "../../../../../libs/__generated__/graphql";
import {IEditCompanyAdress} from "../../../../../types/types";

const EDIT_COMPANYADRESS_MUTATE = gql`
  mutation editCompanyAdress(
    $editCompanyAdressId: Int!
    $adressNum: String
    $restAdress: String
    $streetAdress: String
    $city: String
    $country: String
  ) {
    editCompanyAdress(
      id: $editCompanyAdressId
      adressNum: $adressNum
      restAdress: $restAdress
      streetAdress: $streetAdress
      city: $city
      country: $country
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useEditCompanyAdress = () => {
  const [editCompanyAdress, {loading, error}] = useMutation(
    EDIT_COMPANYADRESS_MUTATE
  );
  const handleEditCompanyAdress = async ({
    id,
    companyId,
    country,
    city,
    streetAdress,
    restAdress,
    adressNum,
  }: IEditCompanyAdress) => {
    await editCompanyAdress({
      variables: {
        editCompanyAdressId: companyId,
        adressNum,
        restAdress,
        streetAdress,
        city,
        country,
      },
      update(cache, {data}) {
        if (data?.editCompanyAdress.ok) {
          cache.modify({
            id: `CompanyAdress:${id}`,
            fields: {
              country() {
                return country + "";
              },
              city() {
                return city + "";
              },
              streetAdress() {
                return streetAdress + "";
              },
              restAdress() {
                return restAdress + "";
              },
              adressNum() {
                return adressNum + "";
              },
            },
          });
        }
      },
    });
  };
  return {handleEditCompanyAdress, loading, error};
};
export default useEditCompanyAdress;
