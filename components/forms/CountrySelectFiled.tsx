'use client';

import { useState } from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import countryList from 'react-select-country-list';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';

type CountrySelectProps = {
    name: string;
    label: string;
    control: Control<any>;
    error?: FieldError;
    required?: boolean;
};

type InnerSelectProps = {
    value: string;
    onChange: (value: string) => void;
};

const CountrySelect = ({ value, onChange }: InnerSelectProps) => {
    const [open, setOpen] = useState(false);
    const countries = countryList().getData();

    // Get country flag emoji
    const getFlagEmoji = (countryCode: string) => {
        if (!countryCode) return '';
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map((char) => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    };

    const handleSelect = (selectedValue: string) => {
        if (typeof onChange === 'function') {
            onChange(selectedValue);
            setOpen(false);
        } else {
            console.error('onChange is not a function:', onChange);
        }
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between text-left bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                >
                    {value ? (
                        <span className="flex items-center gap-2">
              <span>{getFlagEmoji(value)}</span>
              <span>{countries.find((c) => c.value === value)?.label}</span>
            </span>
                    ) : (
                        <span className="text-gray-400">Select your country...</span>
                    )}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-70" />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[300px] p-0 bg-gray-800 text-white border border-gray-700">
                <Command className="bg-gray-800 text-white">
                    <CommandInput
                        placeholder="Search countries..."
                        className="bg-gray-700 text-white placeholder:text-gray-400"
                    />
                    <CommandEmpty className="text-gray-400 p-2">No country found.</CommandEmpty>
                    <CommandList className="max-h-60 overflow-y-auto">
                        <CommandGroup>
                            {countries.map((country) => (
                                <CommandItem
                                    key={country.value}
                                    value={country.label}
                                    onSelect={() => handleSelect(country.value)}
                                    className="bg-gray-800 text-white hover:bg-gray-700 hover:text-yellow-400"
                                >
                                    <Check
                                        className={cn(
                                            'mr-2 h-4 w-4 text-yellow-500',
                                            value === country.value ? 'opacity-100' : 'opacity-0'
                                        )}
                                    />
                                    <span className="flex items-center gap-2">
                    <span>{getFlagEmoji(country.value)}</span>
                    <span>{country.label}</span>
                  </span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export const CountrySelectField = ({
                                       name,
                                       label,
                                       control,
                                       error,
                                       required = false,
                                   }: CountrySelectProps) => {
    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="text-sm font-medium text-white">
                {label}
                {required && <span className="text-red-500">*</span>}
            </Label>

            <Controller
                name={name}
                control={control}
                rules={{
                    required: required ? `Please select ${label.toLowerCase()}` : false,
                }}
                render={({ field }) => (
                    <CountrySelect
                        value={field.value || ''}
                        onChange={(val) => field.onChange(val)}
                    />
                )}
            />

            {error && <p className="text-sm text-red-500">{error.message}</p>}
            <p className="text-xs text-muted-foreground">
                Helps us show market data and news relevant to you.
            </p>
        </div>
    );
};

export default CountrySelectField;
