import {Link} from "react-router-dom";

export function RegisterPage() {
    return (
        <>
            <div className="bg-gray-100 flex flex-col font-intertight gap-[22px] items-center justify-end mx-auto p-[92px] px-10 w-full">
                <h1 className="font-semibold mt-[62px] text-[40px] text-center text-amber-600">
                    Зарегистрируйся
                </h1>
                <div className="flex flex-col items-center justify-start w-[35%]">
                    <input
                        name="username"
                        type="text"
                        placeholder="Введите имя пользователя"
                        className="p-0 h-14 rounded-xl placeholder:text-gray-500 text-center text-lg w-full border-2 border-gray-500 border-solid w-full"
                    ></input>
                    <input
                        name="phone-number"
                        placeholder="Ваш номер телефона или email"
                        className="p-0 h-14 rounded-xl placeholder:text-gray-500 text-center text-lg w-full border-2 border-gray-500 border-solid w-full mt-6"
                        type="email"
                    ></input>
                    <input
                        name="password"
                        placeholder="Введите пароль"
                        className="p-0 h-14 rounded-xl placeholder:text-gray-500 text-center text-lg w-full border-2 border-gray-500 border-solid w-full mt-6"
                    ></input>
                    <input
                        name="password-repeat"
                        placeholder="Повторите пароль"
                        className="p-0 h-14 rounded-xl placeholder:text-gray-500 text-center text-lg w-full border-2 border-gray-500 border-solid w-full mt-6"
                    ></input>
                    <button className="cursor-pointer text-white py-4 px-2 bg-amber-600 rounded-xl font-semibold min-w-[340px] mt-6 text-center text-lg">
                        Зарегистрироваться
                    </button>
                    <div className="flex flex-col items-center justify-end mt-[62px] p-2 rounded-[10px] w-full">
                        <p className="mt-1.5 md:text-2xl sm:text-[22px] text-[26px] text-center text-orange-800">
                            <span className="text-gray-500 font-intertight font-normal">Уже есть аккаунт?</span>
                            <span className="text-orange-800 font-intertight font-normal"> </span>
                            <Link to="/login" className="text-amber-600 font-intertight font-normal underline" >
                                Войти
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}