import {
  DocumentNode,
  TypedDocumentNode,
  gql,
  useMutation,
} from "@apollo/client";
import {ICreateVacationDescProps} from "../../../../types/types";
import {useNavigate, useParams} from "react-router-dom";
import {IParamID} from "../../../../types/routerType";
import {Mutation} from "../../../../libs/__generated__/graphql";

const USING_VACATION_MUTATE = gql`
  mutation createVacationDesc(
    $vacationId: Int!
    $day: Int!
    $vacationType: TVacation!
    $description: String!
  ) {
    createVacationDesc(
      id: $vacationId
      day: $day
      vacationType: $vacationType
      description: $description
    ) {
      ok
      errorMsg
    }
  }
` as DocumentNode | TypedDocumentNode<Mutation>;
const useUsingVacation = () => {
  const param = useParams<keyof IParamID>();
  const navigate = useNavigate();
  const [usingVacation, {loading, error}] = useMutation(USING_VACATION_MUTATE);
  const handleUsingVacation = async ({
    id,
    day,
    vacationType,
    description,
  }: ICreateVacationDescProps) => {
    await usingVacation({
      variables: {
        vacationId: id,
        day: Number(day),
        vacationType,
        description,
      },
      onCompleted(data) {
        if (!data.createVacationDesc.ok) {
          alert(data.createVacationDesc.errorMsg);
        }
        navigate(
          `/company/${param.id}/workers/${param.userID}/detail-vacation/${param.vacationID}`
        );
      },
      update(cache, {data}) {
        const newObj = {
          __typename: "VacationDesc",
          id: data?.createVacationDesc.id,
          createdAt: Date.now(),
          updateAt: Date.now(),
          day,
          vacationType,
          description,
        };
        if (data?.createVacationDesc.ok) {
          cache.modify({
            id: `Vacation:${param.vacationID}`,
            fields: {
              description(prev) {
                return [newObj, ...prev];
              },
            },
          });
        }
      },
    });
  };
  return {handleUsingVacation, loading, error};
};
export default useUsingVacation;
