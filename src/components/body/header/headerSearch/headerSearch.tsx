import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import {IParamID} from "../../../../types/routerType";
import {useAppDispatch, useAppSelector} from "../../../../hooks/storeHook";
import {
  insertCompanyName,
  setSearchMode,
} from "../../../../redux/searchCompanySlice";
interface IPropsHeaderSearch {
  companyName: string;
}
const HeaderSearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;
const HeaderSearchInput = styled.div<{$search: boolean}>`
  position: absolute;
  right: 0px;
  input {
    transform-origin: right;
    transform: scaleX(${(props) => (props.$search ? " 100%" : "0%")});
    transition: ease-in-out 0.2s;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    background-color: inherit;
    color: ${(props) => props.theme.txtColor};
    padding: 5px;
  }
`;
const SearchIcon = styled.svg`
  position: relative;
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.secondary};
  cursor: pointer;
`;
const HeaderSearch = () => {
  //redux
  const dispatch = useAppDispatch();
  const {searchMode} = useAppSelector((state) => state.searchCompany);
  //hooks
  const navigate = useNavigate();
  const param = useParams<keyof IParamID>();
  //form
  const {register, handleSubmit, watch} = useForm<IPropsHeaderSearch>({
    defaultValues: {companyName: ""},
  });
  //fn
  const toggleSearch = () => {
    dispatch(setSearchMode());
    navigate(`/company/${param.id}/search-company`);
  };
  const onSubmit = () => {
    dispatch(insertCompanyName(watch("companyName")));
    dispatch(setSearchMode());
  };
  //useEffect
  useEffect(() => {
    watch((val) => dispatch(insertCompanyName(val.companyName + "")));
  }, [dispatch, watch]);

  return (
    <HeaderSearchForm onSubmit={handleSubmit(onSubmit)}>
      <HeaderSearchInput $search={searchMode}>
        <input
          {...register("companyName")}
          type="text"
          placeholder="회사명을 입력해주세요."
        />
      </HeaderSearchInput>
      {!searchMode ? (
        <SearchIcon
          onClick={toggleSearch}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </SearchIcon>
      ) : (
        <SearchIcon
          onClick={handleSubmit(onSubmit)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </SearchIcon>
      )}
    </HeaderSearchForm>
  );
};
export default HeaderSearch;
