import {SubmitHandler, UseFormRegister, useForm} from "react-hook-form";
import {IEditProduct} from "../../../../types/types";
import {TPaymentSwitch} from "../../../../libs/__generated__/graphql";
import {
  DetailProductForm,
  DetailProductInput,
  DetailProductRadio,
  DetailProductSelect,
  DetailProductTextarea,
} from "./editDetailProduct.style";
interface IEditDetailProduct extends IEditProduct {
  register: UseFormRegister<IEditProduct>;
  mutateFn: () => SubmitHandler<IEditProduct> | void;
}
const EditDetailProduct = ({
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
  register,
  mutateFn,
}: IEditDetailProduct) => {
  const {handleSubmit, setValue, getValues} = useForm<IEditProduct>({
    defaultValues: {
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
    },
  });

  return (
    <DetailProductForm onSubmit={handleSubmit(mutateFn)}>
      <legend hidden>상품수정</legend>
      <DetailProductInput>
        <label htmlFor="itemName">제품명</label>
        <input
          {...register("itemName")}
          id="itemName"
          type="text"
          placeholder={!itemName ? "미기입" : itemName}
          defaultValue={itemName}
        />
      </DetailProductInput>

      <DetailProductInput>
        <label htmlFor="itemModelName">제품모델명</label>
        <input
          {...register("itemModelName")}
          id="itemModelName"
          type="text"
          placeholder={!itemModelName ? "미기입" : itemModelName}
          defaultValue={itemModelName}
        />
      </DetailProductInput>

      <DetailProductInput>
        <label htmlFor="itemType">제품타입</label>
        <input
          {...register("itemType")}
          id="itemType"
          type="text"
          placeholder={!itemType ? "미기입" : itemType}
          defaultValue={itemType + ""}
        />
      </DetailProductInput>

      <DetailProductInput>
        <label htmlFor="itemCount">제품수</label>
        <input
          {...register("itemCount")}
          id="itemCount"
          type="number"
          placeholder={!itemCount ? "0" : itemCount + ""}
          defaultValue={itemCount + ""}
        />
      </DetailProductInput>

      <DetailProductInput>
        <label htmlFor="itemPrice">제품값</label>
        <input
          {...register("itemPrice")}
          id="itemPrice"
          type="number"
          placeholder={!itemPrice ? "미기입" : itemPrice + ""}
          defaultValue={itemPrice + ""}
        />
      </DetailProductInput>

      <DetailProductInput>
        <label htmlFor="paymentType">지불형식</label>
        <input
          {...register("paymentType")}
          id="paymentType"
          type="text"
          placeholder={!paymentType ? "미기입" : paymentType + ""}
          defaultValue={paymentType + ""}
        />
      </DetailProductInput>

      <DetailProductInput>
        <label htmlFor="accountCode">계정과목</label>
        <input
          {...register("accountCode")}
          id="accountCode"
          type="text"
          placeholder={!accountCode ? "미기입" : accountCode + ""}
          defaultValue={accountCode + ""}
        />
      </DetailProductInput>

      <DetailProductRadio>
        <div>
          <label htmlFor="income">수입</label>
          <input
            {...register("incomeTrue")}
            id="income"
            type="radio"
            value={"income"}
            onChange={() => setValue("incomeTrue", "income")}
            defaultChecked={getValues("incomeTrue") === "income"}
          />
        </div>
        <div>
          <label htmlFor="expend">지출</label>
          <input
            {...register("incomeTrue")}
            id="expend"
            type="radio"
            value={"expend"}
            onChange={() => setValue("incomeTrue", "expend")}
            defaultChecked={getValues("incomeTrue") === "expend"}
          />
        </div>
      </DetailProductRadio>

      <DetailProductSelect>
        <label htmlFor="paymentsDone">지불진행사항</label>
        <select
          id="paymentsDone"
          {...register("paymentsDone")}
          defaultValue={paymentsDone}
        >
          <option
            value={(paymentsDone = TPaymentSwitch.Wait)}
            onChange={() => setValue("paymentsDone", TPaymentSwitch.Wait)}
          >
            대기
          </option>
          <option
            value={(paymentsDone = TPaymentSwitch.Paid)}
            onChange={() => setValue("paymentsDone", TPaymentSwitch.Paid)}
          >
            결제
          </option>
          <option
            value={(paymentsDone = TPaymentSwitch.Nonpaid)}
            onChange={() => setValue("paymentsDone", TPaymentSwitch.Nonpaid)}
          >
            비결제
          </option>
        </select>
      </DetailProductSelect>

      <DetailProductTextarea>
        <label htmlFor="businessDesc">거래상세비고</label>
        <textarea
          {...register("businessDesc")}
          id="businessDesc"
          placeholder={!businessDesc ? "미기입" : businessDesc + ""}
          defaultValue={businessDesc + ""}
        />
      </DetailProductTextarea>

      <DetailProductTextarea>
        <label htmlFor="itemDesc">상품설명</label>
        <textarea
          {...register("itemDesc")}
          id="itemDesc"
          placeholder={!itemDesc ? "미기입" : itemDesc}
          defaultValue={itemDesc + ""}
        />
      </DetailProductTextarea>
    </DetailProductForm>
  );
};

export default EditDetailProduct;
