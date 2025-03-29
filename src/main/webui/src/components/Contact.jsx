import { Table } from "react-bootstrap";
import translate from "./i18n/translate";

function Contact() {
    return (
        <Table borderless >
            <thead>
                <tr>
                    <th colSpan={3}>
                    </th>
                    <th colSpan={2}>
                    <h1>{translate('contact')}</h1>
                    </th>
                    <th colSpan={2}>
                    </th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <h5>Body Lab One</h5>
                        <h6>ul.Marcelińska 27</h6>
                        <h6>60-801 Poznań</h6>
                    </td>
                    <td colSpan={3}>
                        <h5>Rehasteon Group</h5>
                        <h6>ul.Łąkowa 1</h6>
                        <h6>62-006 Mielno</h6>
                    </td>
                    <td colSpan={2}>
                        <h5>Rehasteon Group</h5>
                        <h6>ul.Grunwaldzka 13</h6>
                        <h6>60-782 Poznań</h6>
                    </td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <h5>Fizjoterapia i Osteopatia Medactive</h5>
                        <h6>ul.Stróżyńskiego 29</h6>
                        <h6>60-688 Poznań</h6>
                    </td>
                    <td colSpan={3}>
                        <h5>Wielkopolskie Centrum Fizjoterapii</h5>
                        <h6>osiedle Lecha 43</h6>
                        <h6>61-294 Poznań</h6>
                    </td>
                </tr>

            </tbody>
        </Table>
    )
}
export default Contact;