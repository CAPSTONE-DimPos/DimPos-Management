import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
import { setUser } from "@/redux/User/user-slice"
import { LoginSchema, type TLoginRequest } from "@/schema/auth.schema"
import { RoleSchema } from "@/schema/role.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { jwtDecode } from "jwt-decode"
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

  const onSubmit = async ( data: TLoginRequest ) =>
  {
    if ( loginMutation.isPending ) return;

    try
    {
      const result = await loginMutation.mutateAsync( data );
      const accessToken = result.data.data.accessToken;
      const role = ( jwtDecode( accessToken ) as any ).role;
      console.log( "Decoded role:", role );
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

  return (
    <div className={ cn( "flex flex-col gap-6", className ) } { ...props }>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* The Form component wraps everything and provides context */ }
          <Form { ...form }>
            <form className="p-6 md:p-8" onSubmit={ form.handleSubmit( onSubmit ) } noValidate>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Chào mừng bạn quay lại DimPos</h1>
                  <p className="text-muted-foreground text-balance">
                    Đăng nhập để tiếp tục sử dụng
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
                      {/* FormMessage automatically displays validation errors */ }
                      <FormMessage />
                    </FormItem>
                  ) }
                />

                {/* Password field with the same pattern */ }
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

                {/* Submit button with loading state */ }
                <Button
                  type="submit"
                  className="w-full"
                  disabled={ loginMutation.isPending }
                >
                  { loginMutation.isPending ? "Đang đăng nhập..." : "Đăng nhập" }
                </Button>
              </div>
            </form>
          </Form>

          <div className="bg-muted relative hidden md:block">
            <img
              src="/logo.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}