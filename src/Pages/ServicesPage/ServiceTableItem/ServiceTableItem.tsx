interface IServiceItem  {
    price : string ,
    title : string
}
export function ServiceTableItem ({price = '-' , title} : IServiceItem) {
    return (
        <tr>
            <td>{title}</td>
            <td>{price} грн</td>
        </tr>
    )
}