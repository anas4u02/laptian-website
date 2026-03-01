export interface ContactFormField {
    label: string;
    placeholder: string;
    required: boolean;
}

export interface ServiceField extends ContactFormField {
    options: {
        training: string[];
        services: string[];
    };
}

export interface ContactFormConfig {
    heading: string;
    subheading: string;
    fields: {
        name: ContactFormField;
        email: ContactFormField;
        phone: ContactFormField;
        service: ServiceField;
        message: ContactFormField;
    };
    submitButton: string;
    successMessage: string;
    errorMessage: string;
}

export interface ContactInfoConfig {
    heading: string;
    description: string;
    workingHours: string;
}

export interface ContactFormContent {
    contact: {
        form: ContactFormConfig;
        info: {
            training: ContactInfoConfig;
            services: ContactInfoConfig;
        };
    };
}
