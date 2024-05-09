import {DocumentNode, TypedDocumentNode, gql, useQuery} from "@apollo/client";
import {useNavigate, useParams} from "react-router-dom";
import {Query} from "../../../../libs/__generated__/graphql";
import {
  DetailProductBg,
  DetailProductBtn,
  DetailProductCont,
  DetailProductInfo,
  DetailProductLeft,
  DetailProductRight,
  DetailProductText,
} from "./detailProduct.style";
import {Avatar} from "../../../avatar";
import {BtnTheme} from "../../../btnTheme";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {IEditProduct} from "../../../../types/types";
import {INCOME_EXPEND_FRAG} from "../../../../libs/fragments/incomeExpendFrag";
import EditDetailProduct from "./editDetailProduct";
import useEditProduct from "./editProductHook";

const SEE_DETAIL_PRODUCT = gql`
  query seeDetailProduct($seeProductId: Int!) {
    seeProduct(id: $seeProductId) {
      id
      createdAt
      updateAt
      itemProductId
      itemName
      itemModelName
      itemPhoto
      itemType
      itemCount
      itemPrice
      itemDesc
      incomeExpend {
        ...IncomeExpendFrag
      }
    }
  }
  ${INCOME_EXPEND_FRAG}
` as DocumentNode | TypedDocumentNode<Query>;
const DetailProduct = () => {
  //hook
  const params = useParams();
  const navigate = useNavigate();
  //gql query
  const {data, error, loading} = useQuery(SEE_DETAIL_PRODUCT, {
    variables: {seeProductId: Number(params.productID)},
  });
  const product = data?.seeProduct;
  console.log(error);
  //gql mutate
  const {handelEditProduct} = useEditProduct();
  //state
  const [edit, setEdit] = useState(false);
  //form
  const {register, handleSubmit, getValues} = useForm<IEditProduct>({
    defaultValues: {
      itemModelName: product?.itemModelName as string,
      itemName: product?.itemName as string,
      itemType: product?.itemType as string,
      itemCount: product?.itemCount as number,
      itemPrice: product?.itemPrice as number,
      itemDesc: product?.itemDesc as string,
      incomeTrue: product?.incomeExpend.incomeTrue ? "income" : "expend",
      paymentType: product?.incomeExpend.paymentType as string,
      accountCode: product?.incomeExpend.accountCode as string,
      businessDesc: product?.incomeExpend.businessDesc as string,
      paymentsDone: product?.incomeExpend.paymentsDone,
    },
  });

  //fn
  const goBack = () => {
    navigate(`/company/${params.id}/product`);
    setEdit(false);
  };
  const onSubmit = () => {
    const {
      itemModelName,
      itemName,
      itemType,
      itemCount,
      itemPrice,
      itemDesc,
      incomeTrue,
      paymentType,
      accountCode,
      businessDesc,
      paymentsDone,
    } = getValues();
    handelEditProduct({
      id: Number(params.productID),
      incomeExpendId: product?.incomeExpend.id,
      itemProductId: product?.itemProductId,
      itemModelName,
      itemName,
      itemType,
      itemCount,
      itemPrice,
      itemDesc,
      incomeTrue,
      paymentType,
      accountCode,
      businessDesc,
      paymentsDone,
    });
  };
  return (
    <DetailProductCont>
      <DetailProductBg onClick={goBack} />
      <DetailProductInfo>
        <DetailProductLeft>
          <Avatar width="500px" height="500px" radius="0" />
        </DetailProductLeft>
        <DetailProductRight>
          {loading ? (
            <div>loading</div>
          ) : (
            <>
              <DetailProductText>
                <p>제품고유ID:{product?.id}</p>
                <small>생성날짜 : {product?.createdAt}</small>
                <small>수정된날짜 : {product?.updateAt}</small>
              </DetailProductText>
              <DetailProductText>
                <p>제품생산ID</p>
                <p>
                  {!product?.itemProductId ? "미기입" : product?.itemProductId}
                </p>
              </DetailProductText>
              {!edit && (
                <>
                  <DetailProductText>
                    <p>제품명</p>
                    <p>{!product?.itemName ? "미기입" : product?.itemName}</p>
                  </DetailProductText>
                  <DetailProductText>
                    <p>제품모델명</p>
                    <p>
                      {!product?.itemModelName
                        ? "미기입"
                        : product?.itemModelName}
                    </p>
                  </DetailProductText>
                  <DetailProductText>
                    <p>제품타입</p>
                    <p>{!product?.itemType ? "미기입" : product?.itemType}</p>
                  </DetailProductText>
                  <DetailProductText>
                    <p>제품수</p>
                    <p>{!product?.itemCount ? "미기입" : product?.itemCount}</p>
                  </DetailProductText>
                  <DetailProductText>
                    <p>제품가</p>
                    <p>{!product?.itemPrice ? "미기입" : product?.itemPrice}</p>
                  </DetailProductText>
                  <DetailProductText>
                    <p>지출 / 수입</p>
                    <p>{!product?.incomeExpend.incomeTrue ? "지출" : "수입"}</p>
                  </DetailProductText>
                  <DetailProductText>
                    <p>결제타입</p>
                    <p>
                      {!product?.incomeExpend.paymentType
                        ? "미기입"
                        : product?.incomeExpend.paymentType}
                    </p>
                  </DetailProductText>
                  <DetailProductText>
                    <p>계정과목</p>
                    <p>
                      {!product?.incomeExpend.accountCode
                        ? "미기입"
                        : product?.incomeExpend.accountCode}
                    </p>
                  </DetailProductText>
                  <DetailProductText>
                    <p>거래비고</p>
                    <p>
                      {!product?.incomeExpend.businessDesc
                        ? "미기입"
                        : product?.incomeExpend.businessDesc}
                    </p>
                  </DetailProductText>
                  <DetailProductText>
                    <p>결제진행</p>
                    <p>
                      {product?.incomeExpend.paymentsDone === "WAIT"
                        ? "대기"
                        : product?.incomeExpend.paymentsDone === "PAID"
                        ? "결제"
                        : "비결제"}
                    </p>
                  </DetailProductText>
                  <DetailProductText>
                    <p>제품설명</p>
                    <p>{!product?.itemDesc ? "미기입" : product?.itemDesc}</p>
                  </DetailProductText>
                </>
              )}
              {edit && (
                <EditDetailProduct
                  register={register}
                  mutateFn={onSubmit}
                  itemName={product?.itemName}
                  itemModelName={product?.itemModelName as string}
                  itemType={product?.itemType as string}
                  itemCount={product?.itemCount as number}
                  itemPrice={product?.itemPrice as number}
                  itemDesc={product?.itemDesc as string}
                  incomeTrue={
                    product?.incomeExpend.incomeTrue ? "income" : "expend"
                  }
                  paymentType={product?.incomeExpend.paymentType as string}
                  accountCode={product?.incomeExpend.accountCode as string}
                  businessDesc={product?.incomeExpend.businessDesc as string}
                  paymentsDone={product?.incomeExpend.paymentsDone}
                />
              )}
            </>
          )}
          <DetailProductBtn>
            {!edit && (
              <BtnTheme
                text="편집"
                width="60px"
                height="40px"
                fontSize="15px"
                handleClick={() => setEdit(true)}
              />
            )}
            {edit && (
              <BtnTheme
                text="확인"
                width="60px"
                height="40px"
                fontSize="15px"
                handleClick={handleSubmit(onSubmit)}
              />
            )}
            <BtnTheme
              handleClick={goBack}
              text="취소"
              width="60px"
              height="40px"
              fontSize="15px"
            />
          </DetailProductBtn>
        </DetailProductRight>
      </DetailProductInfo>
    </DetailProductCont>
  );
};
export default DetailProduct;
