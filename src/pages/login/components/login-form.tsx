import LoginFormIllustration1 from "@/assets/illustration/login-form-illustration-1"
import LoginFormIllustration2 from "@/assets/illustration/login-form-illustration-2"
import LoginFormIllustration3 from "@/assets/illustration/login-form-illustration-3"
import LoginFormIllustration4 from "@/assets/illustration/login-form-illustration-4"
import DimposLogo from "@/assets/logo/dimpos-logo"
import { Button } from "@/components/ui/button"
import
{
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/use-auth"
import { handleApiError } from "@/lib/error"
import { cn } from "@/lib/utils"
import { setUser } from "@/redux/user/user-slice"
import { LoginSchema, type TLoginRequest } from "@/schema/auth.schema"
import { RoleSchema } from "@/schema/role.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { jwtDecode } from "jwt-decode"
import { useMemo } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"


export function LoginForm ( {
  className,
  ...props
}: React.ComponentProps<"div"> )
{
  const { loginMutation } = useAuth();
  const dispatch = useDispatch();

  const form = useForm<TLoginRequest>( {
    resolver: zodResolver( LoginSchema ),
    defaultValues: {
      username: "",
      password: "",
    },
  } );
  // //console.log( "Is successful login mutation:", loginMutation.isSuccess );
  const onSubmit = async ( data: TLoginRequest ) =>
  {
    if ( loginMutation.isPending ) return;

    try
    {
      const result = await loginMutation.mutateAsync( data );
      const accessToken = result.data.data.accessToken;
      const role = ( jwtDecode( accessToken ) as any ).role;
      //console.log( "Decoded role:", role );
      if ( RoleSchema.safeParse( role ).error )
      {
        throw {
          response: {
            status: 403,
            data: {
              status: 403,
              message: "Tài khoản không có quyền truy cập.",
              data: "Bạn không có quyền truy cập vào tài nguyên này.",
            },
          },
        };
      }
      dispatch( setUser( result.data.data ) );
    } catch ( error )
    {
      handleApiError( error );
    }
  };

  const RandomIllustration = useMemo( () =>
  {
    const illustrations = [
      LoginFormIllustration1,
      LoginFormIllustration2,
      LoginFormIllustration3,
      LoginFormIllustration4,
    ];
    const randomIndex = Math.floor( Math.random() * illustrations.length );
    return illustrations[ randomIndex ];
  }, [] );

  return (
    <div>
      <div className={ cn( "flex flex-col gap-6", className ) } { ...props }>
        <div className="overflow-hidden p-0">
          <div className="grid p-0 md:grid-cols-2 gap-25">
            {/* The Form component wraps everything and provides context */ }
            <Form { ...form }>
              <form className="p-6 md:p-8" onSubmit={ form.handleSubmit( onSubmit ) } noValidate>
                <div className="flex flex-col gap-6">
                  <DimposLogo className="size-18" />
                  <div className="flex flex-col items-start text-left">
                    <p className="text-4xl font-bold">
                      Đăng nhập
                    </p>
                  </div>

                  {/* Username/Email field using FormField for full integration */ }
                  <FormField
                    control={ form.control }
                    name="username"
                    render={ ( { field } ) => (
                      <FormItem>
                        <FormLabel>Tên đăng nhập</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Nhập tên đăng nhập"
                            disabled={ loginMutation.isPending }
                            { ...field }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />

                  <FormField
                    control={ form.control }
                    name="password"
                    render={ ( { field } ) => (
                      <FormItem>
                        <FormLabel>Mật khẩu</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            disabled={ loginMutation.isPending }
                            { ...field }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={ loginMutation.isPending }
                    size="lg"
                  >
                    { loginMutation.isPending ? "Đang đăng nhập..." : "Đăng nhập" }
                  </Button>
                </div>
              </form>
            </Form>

            <RandomIllustration className="size-100" />
          </div>
        </div>
      </div>
    </div>
  );
}