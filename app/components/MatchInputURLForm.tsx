"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";

type Inputs = {
  matchroomID: string;
};
const MatchInputURLForm = (props: { submitFn: Function }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    props.submitFn(data.matchroomID);
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register("matchroomID", { required: true })}
        placeholder="Your FACEIT match URL"
        className="border border-gray-200 rounded-md px-10"
      />
      {/* errors will return when field validation fails  */}
      {errors.matchroomID && <span>A matchroomID is required</span>}

      <input type="submit" className="bg-red-100 px-10 rounded-md mt-2" />
    </form>
  );
};

export default MatchInputURLForm;
