export type Language = "en" | "pt"

export interface Translations {
    stepTitles: {
        productCatalog: string
        contactInformation: string
        orderDetails: string
    }
    buttons: {
        previous: string
        next: string
        submit: string
    }
    step1: {
        searchLabel: string
        searchPlaceholder: string
        noProductsFound: string
        productsSelected: string
    }
    step2: {
        nameLabel: string
        namePlaceholder: string
        nameError: string
        addressLabel: string
        addressPlaceholder: string
        addressError: string
        phoneLabel: string
        phonePlaceholder: string
        phoneError: string
    }
    step3: {
        summary: string
        name: string
        address: string
        contact: string
        products: string
        total: string
    }
    alerts: {
        orderSubmitted: string
    }
}

export const translations: Record<Language, Translations> = {
    en: {
        stepTitles: {
            productCatalog: "Product Catalog",
            contactInformation: "Contact Information",
            orderDetails: "Order Details",
        },
        buttons: {
            previous: "Previous",
            next: "Next",
            submit: "Submit",
        },
        step1: {
            searchLabel: "Search products",
            searchPlaceholder: "Search by name",
            noProductsFound: "No products found with the term",
            productsSelected: "product(s) selected",
        },
        step2: {
            nameLabel: "Name",
            namePlaceholder: "Full name",
            nameError: "Name is required",
            addressLabel: "Address",
            addressPlaceholder: "Full address",
            addressError: "Address is required",
            phoneLabel: "Phone",
            phonePlaceholder: "Phone number",
            phoneError: "Phone number is required",
        },
        step3: {
            summary: "Order Summary",
            name: "Name",
            address: "Address",
            contact: "Contact",
            products: "Products",
            total: "Total",
        },
        alerts: {
            orderSubmitted: "Order submitted! Thank you,",
        },
    },
    pt: {
        stepTitles: {
            productCatalog: "Catálogo de Produtos",
            contactInformation: "Informações de Contacto",
            orderDetails: "Detalhes da Encomenda",
        },
        buttons: {
            previous: "Anterior",
            next: "Seguinte",
            submit: "Submeter",
        },
        step1: {
            searchLabel: "Pesquisar produtos",
            searchPlaceholder: "Pesquisar por nome",
            noProductsFound: "Nenhum produto encontrado com o termo",
            productsSelected: "produto(s) selecionado(s)",
        },
        step2: {
            nameLabel: "Nome",
            namePlaceholder: "Nome completo",
            nameError: "Nome é obrigatório",
            addressLabel: "Morada",
            addressPlaceholder: "Morada completa",
            addressError: "Morada é obrigatória",
            phoneLabel: "Telemóvel",
            phonePlaceholder: "Número de telemóvel",
            phoneError: "Número de telemóvel é obrigatório",
        },
        step3: {
            summary: "Resumo da Encomenda",
            name: "Nome",
            address: "Morada",
            contact: "Contacto",
            products: "Produtos",
            total: "Total",
        },
        alerts: {
            orderSubmitted: "Encomenda submetida! Obrigado,",
        },
    },
}