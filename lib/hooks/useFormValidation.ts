import { useApi } from "../providers/api.provider";
import { Step } from "../entities/glabal.entities";
import { fakeApi, ResponseType } from "../repository/fake-repository";

export function useFormValidation() {
  const { setLoading, setError } = useApi();

  const stepValidation = async (
    step: Step,
    data?: Partial<Record<string, any>>
  ): Promise<ResponseType | void> => {
    setError("");
    setLoading(true);
    let response;
    try {
      response = await fakeApi(data);
    } catch (error) {
      setError(
        `An error occurred in ${step} step validation: ` +
          (error as ResponseType).errorMsg
      );
    } finally {
      setLoading(false);
      return response;
    }
  };

  return {
    stepValidation,
  };
}
