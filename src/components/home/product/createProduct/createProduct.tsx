import {useForm} from "react-hook-form";
import {BtnTheme} from "../../../btnTheme";
import {CreateProductForm, CreateProductInput} from "./createProduct.style";
import {useNavigate, useParams} from "react-router-dom";
import {ICreateProduct} from "../../../../types/types";
import useCreateProductMutate from "./createProductHook";
import {TPaymentSwitch} from "../../../../libs/__generated__/graphql";
import ModalWrapper from "../../../shareComp/modalWrapper";

const CreateProduct = () => {
  //hook
  const navigate = useNavigate();
  const param = useParams();
  const {handleCreateProduct} = useCreateProductMutate();
  //form
  const {register, handleSubmit, getValues, setValue} = useForm<ICreateProduct>(
    {
      defaultValues: {
        id: Number(param.id),
        itemProductId: "",
        itemName: "",
        itemModelName: "",
        itemType: "",
        itemCount: 0,
        itemPrice: 0,
        itemDesc: "",
        incomeTrue: "INCOME",
        paymentType: "",
        accountCode: "",
        businessDesc: "",
        paymentsDone: TPaymentSwitch.Wait,
      },
    }
  );
  //fn
  const onSubmit = () => {
    const {
      id,
      itemProductId,
      itemName,
      itemModelName,
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
    handleCreateProduct({
      id,
      itemProductId,
      itemName,
      itemModelName,
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
  const goBack = () => navigate(`/company/${param.id}/product`);
  return (
    <ModalWrapper goBack={goBack}>
      <CreateProductForm onSubmit={handleSubmit(onSubmit)}>
        <legend>제품생성</legend>
        <CreateProductInput>
          <label htmlFor="itemProductId">
            제품주문ID<span>*</span>
          </label>
          <input
            {...register("itemProductId")}
            id="itemProductId"
            type="text"
            placeholder="제품주문ID"
          />
        </CreateProductInput>
        <CreateProductInput>
          <label htmlFor="itemName">제품이름</label>
          <input
            {...register("itemName")}
            id="itemName"
            type="text"
            placeholder="제품이름"
          />
        </CreateProductInput>
        <CreateProductInput>
          <label htmlFor="itemModelName">제품모델명</label>
          <input
            {...register("itemModelName")}
            id="itemModelName"
            type="text"
            placeholder="제품모델명"
          />
        </CreateProductInput>
        <CreateProductInput>
          <label htmlFor="itemType">제품타입</label>
          <input
            {...register("itemType")}
            id="itemType"
            type="text"
            placeholder="제품타입"
          />
        </CreateProductInput>
        <CreateProductInput>
          <label htmlFor="itemCount">제품수</label>
          <input
            {...register("itemCount")}
            id="itemCount"
            type="text"
            placeholder="제품수"
          />
        </CreateProductInput>
        <CreateProductInput>
          <label htmlFor="itemPrice">제품가격</label>
          <input
            {...register("itemPrice")}
            id="itemPrice"
            type="text"
            placeholder="제품가격"
          />
        </CreateProductInput>
        <CreateProductInput>
          <label htmlFor="itemDesc">제품설명</label>
          <input
            {...register("itemDesc")}
            id="itemDesc"
            type="text"
            placeholder="제품설명"
          />
        </CreateProductInput>
        <CreateProductInput>
          <label htmlFor="incomeTrue">수익</label>
          <input
            {...register("incomeTrue")}
            id="incomeTrue"
            type="radio"
            value={"INCOME"}
            onChange={() => setValue("incomeTrue", "INCOME")}
          />
          <label htmlFor="incomeTrue">지출</label>
          <input
            {...register("incomeTrue")}
            id="incomeTrue"
            type="radio"
            value={"EXPEND"}
            onChange={() => setValue("incomeTrue", "EXPEND")}
          />
        </CreateProductInput>
        <CreateProductInput>
          <label htmlFor="paymentType">결제방식</label>
          <input
            {...register("paymentType")}
            id="paymentType"
            type="text"
            placeholder="결제방식"
          />
        </CreateProductInput>
        <CreateProductInput>
          <label htmlFor="accountCode">계정과목</label>
          <input
            {...register("accountCode")}
            id="accountCode"
            type="text"
            placeholder="계정과목"
          />
        </CreateProductInput>
        <CreateProductInput>
          <label htmlFor="businessDesc">거래설명</label>
          <input
            {...register("businessDesc")}
            id="businessDesc"
            type="text"
            placeholder="거래설명"
          />
        </CreateProductInput>
        <CreateProductInput>
          <label htmlFor="paymentsDone">거래진행</label>
          <select {...register("paymentsDone")} id="paymentsDone">
            <option
              onChange={() => setValue("paymentsDone", TPaymentSwitch.Wait)}
              value={TPaymentSwitch.Wait}
            >
              대기
            </option>
            <option
              onChange={() => setValue("paymentsDone", TPaymentSwitch.Paid)}
              value={TPaymentSwitch.Paid}
            >
              지불
            </option>
            <option
              onChange={() => setValue("paymentsDone", TPaymentSwitch.Nonpaid)}
              value={TPaymentSwitch.Nonpaid}
            >
              비지불
            </option>
          </select>
        </CreateProductInput>
        <BtnTheme
          text="확인"
          width="100px"
          height="30px"
          handleClick={handleSubmit(onSubmit)}
        />
      </CreateProductForm>
    </ModalWrapper>
  );
};
export default CreateProduct;
