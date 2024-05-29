import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {Mutation} from "../../../../libs/__generated__/graphql";
import {IEditVacation} from "../../../../types/types";
import {useParams} from "react-router-dom";
import {IParamID} from "../../../../types/routerType";
const EDIT_VACATION_MUTATE = gql`
  mutation editVacation(
    $companyId: Int!
    $vacationId: Int!
    $joinCompanyDate: String
    $other: Int
  ) {
    editVacation(
      companyId: $companyId
      vacationId: $vacationId
      joinCompanyDate: $joinCompanyDate
      other: $other
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useEditVacation = () => {
  const param = useParams<keyof IParamID>();

  const [editVacation, {loading, error}] = useMutation(EDIT_VACATION_MUTATE);
  const handleEditVacation = async ({
    companyId,
    vacationId,
    joinCompanyDate,
    other,
  }: IEditVacation) => {
    await editVacation({
      variables: {
        companyId,
        vacationId,
        other: Number(other),
        joinCompanyDate: joinCompanyDate,
      },
      onCompleted({editVacation}) {
        if (!editVacation.ok) {
          alert(editVacation.errorMsg);
        }
      },
      update(cache, {data}) {
        if (data?.editVacation.ok) {
          cache.modify({
            id: `Vacation:${param.vacationID}`,
            fields: {
              joinCompanyDate() {
                return joinCompanyDate + "";
              },
              other() {
                return other as number;
              },
              restOtherVacation() {
                return other as number;
              },
              totalVacation(prev, {readField}) {
                let newRestVacation;
                const prevOtherVacation = readField("other");
                if (other) {
                  if (other === prevOtherVacation) {
                    newRestVacation = prev;
                  } else if (Number(other) > Number(prevOtherVacation)) {
                    newRestVacation =
                      Number(prev) + Number(other) - Number(prevOtherVacation);
                  } else if (Number(other) < Number(prevOtherVacation)) {
                    newRestVacation =
                      Number(prev) -
                      (Number(prevOtherVacation) - Number(other));
                  }
                }
                return newRestVacation?.toString();
              },
            },
          });
        }
      },
    });
  };
  return {handleEditVacation, loading, error};
};
export default useEditVacation;
