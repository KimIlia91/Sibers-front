'use client';

import Image from "next/image";
import Input from "./Input";
import { useState } from "react";

const PasswordInput = () => {
    const [isShow, setIsShow] = useState(false);

    const onShow = () => {
        setIsShow(show => !show)
    }

    return (
        <div className="relative">
            <Input type={isShow ? 'text' : 'password'} placeholder="Пароль" />
            <button onClick={onShow} type="button" className="absolute top-[50%] translate-y-[-50%] right-4">
                {
                    isShow 
                    ? <Image src="/images/eye-open.svg" alt="eye opne" width={20} height={20} />
                    : <Image src="/images/eye-close.svg" alt="eye close" width={20} height={20} />
                }
            </button>
        </div>
    )
}

export default PasswordInput