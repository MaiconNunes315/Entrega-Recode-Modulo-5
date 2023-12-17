import Form from '@/components/Form'
import Input from '@/components/Input'


export default function carrinho() {
    return (
        <div>
            <Form title="Concluindo compra">
                <div>
                    <div>

                        <Input title={"Data de check-in"} type="date" />
                        <Input title={"Data de check-out"} type="date" />
                    </div>
                    <div>

                    </div>
                </div>
            </Form>
        </div>
    )
}
